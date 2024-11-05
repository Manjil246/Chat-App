import React, { useEffect, useState } from "react";
import { gray } from "../../constants/color";
import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp,
  Groups as GroupsIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import Drawer from "../../utils/Drawer";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

const AdminLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to="/admin" />;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 h-screen">
        <div
          className="absolute top-2 right-2 cursor-pointer block sm:hidden"
          onClick={handleMobile}
        >
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className="col-span-1 sm:block hidden h-full text-white bg-gray-400">
          <Sidebar />
        </div>
        <div className="col-span-2 lg:col-span-3 bg-gray-200 h-full">
          <Outlet />
        </div>
      </div>
      <div className="text-white">
        <Drawer onClose={handleMobile} isOpen={isMobile} width="50vw">
          <Sidebar />
        </Drawer>
      </div>
    </>
  );
};

const Sidebar = () => {
  const location = useLocation();

  const logoutHandler = () => {
    console.log("Logout");
  };

  return (
    <div className="flex flex-col h-full w-full gap-6">
      <div className="uppercase text-lg text-center w-full">Chat App</div>
      <div className="flex flex-col gap-4 items-center ">
        {adminTabs.length > 0 &&
          adminTabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.path}
              className={`${
                location.pathname === tab.path
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-500"
              } no-underline text-white w-2/3 flex gap-4 n p-4 rounded-lg`}
            >
              <div>{tab.icon}</div>
              <div>{tab.name}</div>
            </Link>
          ))}
      </div>
      <button
        className={`bg-gray-400 hover:bg-gray-500 text-white w-2/3 flex gap-4 n p-4 rounded-lg self-center`}
        onClick={logoutHandler}
      >
        <ExitToApp />
        <div> Logout</div>
      </button>
    </div>
  );
};

export default AdminLayout;
