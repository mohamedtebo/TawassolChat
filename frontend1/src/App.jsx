import { useState } from "react";
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

function App() {
  const isAuthenticated = true;
  const [openTheme, setOpenTheme] = useState(false);
  const [openShortcuts, setOpenShortcuts] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openCalls, setOpenCalls] = useState(false);
  const handleOpenTheme = () => setOpenTheme(!openTheme);
  const handleOpenShortcuts = () => setOpenShortcuts(!openShortcuts);
  const handleOpenCreate = () => setOpenCreate(!openCreate);
  const handleOpenCalls = () => setOpenCalls(!openCalls);

  return (
    <div className='bg-bgSoftGray'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectNotLogged isAuthenticated={isAuthenticated}>
            <Sidebar />
          </ProtectNotLogged>}>
            <Route index element={<Navigate to="chats" />} />
            <Route path="chats" element={<ChatsPage />} />
            <Route path="chat/:id" element={<PrivateChatPage />} />
            <Route path="groups" element={<GroupsPage handleOpen={handleOpenCreate} />} />
            <Route path="group/:id" element={<PrivateGroupPage />} />
            <Route path="calls" element={<CallsPage handleOpen={handleOpenCalls} />} />
            <Route path="profile" element={<ProfilePage />} />
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
          </Route>
        </Routes>

        <ModalTheme openTheme={openTheme} handleOpenTheme={handleOpenTheme} />
        <ModalShortcuts openShortcuts={openShortcuts} handleOpenShortcuts={handleOpenShortcuts} />
        <ModalCreateGroup open={openCreate} handleOpen={handleOpenCreate} />
        <ModalCalls open={openCalls} handleOpen={handleOpenCalls} />
      </BrowserRouter>
    </div>
  )
}

export default App
