import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectLogged, ProtectNotLogged } from "./Routes/ProtectedRoutes";
import Sidebar from "./Components/Utils/Sidebar";
import ChatsPage from "./Pages/Chats/ChatsPage";
import PrivateChatPage from "./Pages/Chats/PrivateChatPage";
import GroupsPage from "./Pages/Groups/GroupsPage";
import PrivateGroupPage from "./Pages/Groups/PrivateGroupPage";
import CallsPage from "./Pages/Calls/CallsPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import EditProfilePage from "./Pages/Profile/EditProfilePage";
import SettingsPage from "./Pages/Settings/SettingsPage";
import Auth from "./Components/Auth/Auth";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import NewPasswordPage from "./Pages/Auth/NewPasswordPage";
import VerifyEmailPage from "./Pages/Auth/VerifyEmailPage";
import ModalTheme from "./Components/Modal/ModalTheme";
import ModalShortcuts from "./Components/Modal/ModalShortcuts";
import ModalCreateGroup from "./Components/Modal/ModalCreateGroup";
import ModalCalls from "./Components/Modal/ModalCalls";
import ModalLogout from "./Components/Modal/ModalLogout";
import Friends from "./Components/Modal/Friends";

function App() {
  const isAuthenticated = true;
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
      // dispatch(logOutUser());
    }, 1000)
  }

  return (
    <div className='bg-bgSoftGray'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectNotLogged isAuthenticated={isAuthenticated}>
            <Sidebar handleOpenLogout={handleOpenLogout} />
          </ProtectNotLogged>}>
            <Route index element={<Navigate to="chats" />} />
            <Route path="chats" element={<ChatsPage handleOpenFriends={handleOpenFriends} />} />
            <Route path="chat/:id" element={<PrivateChatPage />} />
            <Route path="groups" element={<GroupsPage handleOpen={handleOpenCreate} />} />
            <Route path="group/:id" element={<PrivateGroupPage />} />
            <Route path="calls" element={<CallsPage handleOpen={handleOpenCalls} />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/edit" element={<EditProfilePage />} />
            <Route path="settings" element={<SettingsPage handleOpenTheme={handleOpenTheme} handleOpenShortcuts={handleOpenShortcuts} />} />
          </Route>

          <Route path="/auth" element={<ProtectLogged isAuthenticated={isAuthenticated}>
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
