import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/utils/Sidebar";
import ChatsPage from "./pages/chats/ChatsPage";
import PrivateChatPage from "./pages/chats/PrivateChatPage";
import GroupsPage from "./pages/groups/GroupsPage";
import PrivateGroupPage from "./pages/groups/PrivateGroupPage";
import CallsPage from "./pages/calls/CallsPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SettingsPage from "./pages/settings/SettingsPage";
import Auth from './components/auth/Auth';
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import NewPasswordPage from "./pages/auth/NewPasswordPage";
import ModalTheme from "./components/modal/ModalTheme";
import ModalShortcuts from "./components/modal/ModalShortcuts";
import ModalCreateGroup from "./components/modal/ModalCreateGroup";
import ModalCalls from "./components/modal/ModalCalls";
import { ProtectLogged, ProtectNotLogged } from "./routes/ProtectedRoutes";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";
import { useDispatch, useSelector } from "react-redux";
import ModalLogout from "./components/modal/ModalLogout";
import { logOutUser } from "./store/reducers/authReducer";
import { toast } from "react-toastify";
import Friends from "./components/modal/Friends";
import { connectSocket, socket } from "./socket";

function App() {
  const dispatch = useDispatch();
  const {loggedIn, user_id} = useSelector(state => state.auth);
  const [openTheme, setOpenTheme] = useState(false);
  const [openShortcuts, setOpenShortcuts] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openCalls, setOpenCalls] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [openFriends, setOpenFriends] = useState(false);
  const handleOpenTheme = () => setOpenTheme(!openTheme);
  const handleOpenShortcuts = () => setOpenShortcuts(!openShortcuts);
  const handleOpenCreate = () => setOpenCreate(!openCreate);
  const handleOpenCalls = () => setOpenCalls(!openCalls);
  const handleOpenLogout = () => setOpenLogout(!openLogout);
  const handleOpenFriends = () => setOpenFriends(!openFriends);

  const confirmLogOut = () => {
    handleOpenLogout()
    setTimeout(() => {
      toast.success("Log out successfully");
      dispatch(logOutUser());
    }, 1000)
  }

  useEffect(() => {
    if(loggedIn) {
      if(!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }

      if (!socket) {
        connectSocket(user_id);
      }
  
      socket.on("new_friend_request", (data) => {
        toast.success(data.message);
      });

      socket.on("request_accepted", (data) => {
        toast.success(data.message);
      });

      socket.on("request_sent", (data) => {
        toast.success(data.message);
      });
    }

    // Remove event listener on component unmount
    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
    }
  }, [loggedIn, user_id])

  return (
    <div className='bg-bgSoftGray'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectNotLogged isAuthenticated={loggedIn}>
            <Sidebar handleOpenLogout={handleOpenLogout} />
          </ProtectNotLogged>}>
            <Route index element={<Navigate to="chats" />} />
            <Route path="chats" element={<ChatsPage handleOpenFriends={handleOpenFriends} />} />
            <Route path="chat/:id" element={<PrivateChatPage />} />
            <Route path="groups" element={<GroupsPage handleOpen={handleOpenCreate} />} />
            <Route path="group/:id" element={<PrivateGroupPage />} />
            <Route path="calls" element={<CallsPage handleOpen={handleOpenCalls} />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage handleOpenTheme={handleOpenTheme} handleOpenShortcuts={handleOpenShortcuts} />} />
          </Route>

          <Route path="/auth" element={<ProtectLogged isAuthenticated={loggedIn}>
            <Auth />
          </ProtectLogged>}>
            <Route index element={<Navigate to="login" />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route path="new-password" element={<NewPasswordPage />} />
            <Route path="verify-email" element={<VerifyEmailPage />} />
          </Route>
        </Routes>

        <ModalTheme openTheme={openTheme} handleOpenTheme={handleOpenTheme} />
        <ModalShortcuts openShortcuts={openShortcuts} handleOpenShortcuts={handleOpenShortcuts} />
        <ModalCreateGroup open={openCreate} handleOpen={handleOpenCreate} />
        <ModalCalls open={openCalls} handleOpen={handleOpenCalls} />
        <ModalLogout open={openLogout} handleOpen={handleOpenLogout} confirmLogOut={confirmLogOut} />
        <Friends open={openFriends} handleOpen={handleOpenFriends} />
      </BrowserRouter>
    </div>
  )
}

export default App
