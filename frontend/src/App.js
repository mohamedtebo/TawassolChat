import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chats from "./pages/Chats";
import PrivateChat from "./pages/PrivateChat";
import Settings from "./pages/Settings";
import { useState } from "react";
import ModalTheme from "./components/modal/ModalTheme";
import ModalShortcuts from "./components/modal/ModalShortcuts";
import Auth from "./components/auth/Auth";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import NewPasswordPage from "./pages/auth/NewPasswordPage";
import Groups from "./pages/Groups";
import PrivateGroup from "./pages/PrivateGroup";
import ModalCreateGroup from "./components/modal/ModalCreateGroup";
import Calls from "./pages/Calls";
import ModalCalls from "./components/modal/ModalCalls";
import ProfilePage from "./pages/ProfilePage";
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
    <div className="App bg-bgSoftGray">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectNotLogged isAuthenticated={isAuthenticated}>
              <Sidebar />
          </ProtectNotLogged>}>
            <Route index element={<Navigate to="chats" />} />
            <Route path="chats" element={<Chats />} />
            <Route path="chat/:id" element={<PrivateChat />} />
            <Route path="groups" element={<Groups handleOpen={handleOpenCreate} />} />
            <Route path="group/:id" element={<PrivateGroup />} />
            <Route path="call" element={<Calls handleOpen={handleOpenCalls} />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<Settings handleOpenTheme={handleOpenTheme} handleOpenShortcuts={handleOpenShortcuts} />} />
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
  );
}

export default App;
