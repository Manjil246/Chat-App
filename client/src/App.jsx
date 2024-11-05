import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { LayoutLoader, AdminLayoutLoader } from "./components/layout/Loaders";
import AdminLayout from "./components/layout/AdminLayout";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const MessageManagement = lazy(() => import("./pages/admin/MessageManagement"));

const App = () => {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route
          element={
            <Suspense fallback={<LayoutLoader />}>
              <ProtectedRoute user={user} />
            </Suspense>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>
        <Route
          element={
            <Suspense fallback={<LayoutLoader />}>
              <ProtectedRoute user={!user} redirect="/" />
            </Suspense>
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>

        <Route
          path="/admin"
          element={
            <Suspense fallback={<AdminLayoutLoader />}>
              <AdminLogin />
            </Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<AdminLayoutLoader />}>
              <AdminLayout />
            </Suspense>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="chats" element={<ChatManagement />} />
          <Route path="messages" element={<MessageManagement />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
