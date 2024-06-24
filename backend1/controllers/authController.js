const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailService = require("../services/mailer");
const crypto = require("crypto");

const filterObj = require("../utils/filterObj");

// Model
const User = require("../models/user");
const otp = require("../Templates/Mail/otp");
const resetPassword = require("../Templates/Mail/resetPassword");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");

// this function will return you jwt token
const signToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET);

// Register New User
exports.register = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, phone, password } = req.body;

  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "email",
    "phone",
    "password"
  );

  // check if a verified user with given email exists

  const existing_user = await User.findOne({ phone });

  if (existing_user && existing_user.verified) {
    // user with this email already exists, Please login
    return res.status(400).json({
      status: "error",
      message: "Phone already in use, Please login.",
    });
  } else if (existing_user) {
    // if not verified than update prev one

    await User.findOneAndUpdate({ email: email }, filteredBody, {
      new: true,
      validateModifiedOnly: true,
    });

    // generate an otp and send to email
    req.userId = existing_user._id;
    next();
  } else {
    // if user is not created before than create a new one
    const new_user = await User.create(filteredBody);

    // generate an otp and send to email
    req.userId = new_user._id;
    next();
  }
});

exports.sendOTP = catchAsync(async (req, res, next) => {
  const { userId } = req;
  const new_otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  const otp_expiry_time = Date.now() + 10 * 60 * 1000; // 10 Mins after otp is sent

  const user = await User.findByIdAndUpdate(userId, {
    otp_expiry_time: otp_expiry_time,
  });

  user.otp = new_otp.toString();

  await user.save({ new: true, validateModifiedOnly: true });

  console.log("OTP for verification is", new_otp);

  // TODO send mail
  try {
    await mailService.sendEmail({
      from: "marwansalem164@gmail.com",
      to: user.email,
      subject: "Verification OTP",
      html: otp(user.firstName, new_otp),
      attachments: [],
    });

    res.status(200).json({
      status: "success",
      message: "OTP Sent Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Failed to send OTP",
    });
  }
});

exports.verifyOTP = catchAsync(async (req, res, next) => {
  // verify otp and update user accordingly
  const { email, otp } = req.body;
  const user = await User.findOne({
    email,
    otp_expiry_time: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({
      status: "error",
      message: "Email is invalid or OTP expired",
    });
  }

  if (user.verified) {
    return res.status(400).json({
      status: "error",
      message: "Email is already verified",
    });
  }

  if (!(await user.correctOTP(otp, user.otp))) {
    res.status(400).json({
      status: "error",
      message: "OTP is incorrect",
    });

    return;
  }

  // OTP is correct

  user.verified = true;
  user.otp = undefined;
  await user.save({ new: true, validateModifiedOnly: true });

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    message: "OTP verified Successfully!",
    token,
    user_id: user._id,
  });
});

// User Login
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // console.log(email, password);

  if (!email || !password) {
    res.status(400).json({
      status: "error",
      message: "Both email and password are required",
    });
    return;
  }

  const user = await User.findOne({ email: email }).select("+password");

  if (!user || !user.password) {
    res.status(400).json({
      status: "error",
      message: "Incorrect password",
    });

    return;
  }

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(400).json({
      status: "error",
      message: "Email or password is incorrect",
    });

    return;
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    message: "Logged in successfully!",
    token,
    user_id: user._id,
  });
});

// Protect
exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({
      message: "You are not logged in! Please log in to get access.",
    });
  }
  // 2) Verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  console.log(decoded);

  // 3) Check if user still exists

  const this_user = await User.findById(decoded.userId);
  if (!this_user) {
    return res.status(401).json({
      message: "The user belonging to this token does no longer exists.",
    });
  }
  // 4) Check if user changed password after the token was issued
  if (this_user.changedPasswordAfter(decoded.iat)) {
    return res.status(401).json({
      message: "User recently changed password! Please log in again.",
    });
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = this_user;
  next();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // // 1) Get user based on POSTed email
  // const user = await User.findOne({ email: req.body.email });
  // if (!user) {
  //   return res.status(404).json({
  //     status: "error",
  //     message: "There is no user with email address.",
  //   });
  // }

  // // 2) Generate the random reset token
  // const resetToken = user.createPasswordResetToken();
  // await user.save({ validateBeforeSave: false });

  // // 3) Send it to user's email
  // try {
  //   const resetURL = `http://localhost:3000/auth/new-password?token=${resetToken}`;
  //   // TODO => Send Email with this Reset URL to user's email address

  //   console.log(resetURL);

  //   await mailService.sendEmail({
  //     from: "marwansalem164@gmail.com",
  //     to: user.email,
  //     subject: "Reset Password",
  //     html: resetPassword(user.firstName, resetURL),
  //     attachments: [],
  //   });

  //   res.status(200).json({
  //     status: "success",
  //     message: "Token sent to email!",
  //   });
  // } catch (err) {
  //   user.passwordResetToken = undefined;
  //   user.passwordResetExpires = undefined;
  //   await user.save({ validateBeforeSave: false });

  //   return res.status(500).json({
  //     message: "There was an error sending the email. Try again later!",
  //   });
  // }

  // 1) Get user by email
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: `There is no user with this email address ${email}`,
    });
  }

  // 2) Generate the random reset token or random 6 digits and save it in db (explain it on draw.io)
  // 2) Generate random reset code and save it in db
  // save the encrypted reset code into our db and send the un encrypted via email
  // https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/
  // generate 6 digit random number in javascript
  const resetCode = Math.floor(Math.random() * 1000000 + 1).toString();
  // encrypt the reset code before saving it in db (Security)
  const hashedResetCode = crypto
    .createHash('sha256')
    .update(resetCode)
    .digest('hex');

    user.passwordResetCode = hashedResetCode;
    // Add expiration time for password reset code (10 min for example)
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    // because user maybe send new code after verify one
    user.resetCodeVerified = false;
    user.save();

    // 3)  Send password reset code via email
  // We use try and catch because i want to implement logic if error happens
  const message = `Forgot your password? Submit this reset password code : ${resetCode} <br /> If you didn't forgot your password, please ignore this email!`;

  try {
    await mailService.sendEmail({
      from: "marwansalem164@gmail.com",
      to: user.email,
      subject: "Reset Password",
      html: resetPassword(user.firstName, message),
      attachments: [],
    });

    res.status(200).json({
      status: 'Success',
      message: 'Reset code sent to your email',
    });
  } catch (err) {
    user.passwordResetCode = undefined;
    user.passwordResetExpires = undefined;
    user.save({ validateBeforeSave: false });
    console.log(err);
    return res.status(500).json({
      status: "error",
      message: "There was an error sending the email. Try again later!",
    });
  }
});

exports.verifyPasswordResetCode = catchAsync(async (req, res, next) => {
  // 1) Get user based on reset code ! because we have not user id
  const hashedResetCode = crypto
    .createHash('sha256')
    .update(req.body.otp)
    .digest('hex');

  // 2) Check if reset code is valid or expired
  const user = await User.findOne({
    passwordResetCode: hashedResetCode,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ApiError('Reset code is invalid or has expired', 400));
  }
  // 4) If reset code has not expired, and there is user send res with userId
  user.resetCodeVerified = true;
  await user.save();

  res.status(200).json({
    status: 'Success',
  });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: `There is no user with this email address ${req.body.email}`,
    });
  }
  // Check if user verify the reset code
  if (!user.resetCodeVerified) {
    // return next(new ApiError('reset code not verified', 400));
    return res.status(400).json({
      status: "error",
      message: 'reset code not verified',
    })
  }

  // 2) Check if passwordConfirm matches password
  if (req.body.password !== req.body.passwordConfirm) {
    return res.status(400).json({
      status: "error",
      message: 'Password and password confirm do not match',
    })
  }

  // 2) Update user password & Hide passwordResetCode & passwordResetExpires from the result
  user.password = req.body.password;
  // user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetCode = undefined;
  user.passwordResetExpires = undefined;
  user.resetCodeVerified = undefined;

  await user.save();

  // 3) If everything ok, send token to client
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    message: "Password Reseted Successfully",
    token,
  });
});
