import React, { lazy, Suspense, useState } from "react";
import { orange } from "../../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../utils/IconBtn";
import { BackdropLoader } from "./Loaders";
const SearchDialog = lazy(() => import("../specific/Search"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));
const NotificationsDialog = lazy(() => import("../specific/Notifications"));

const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewGroupOpen, setIsNewGroupOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMobileOpen);
  };
  const openSearchDialog = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const openNewGroup = () => {
    setIsNewGroupOpen(!isNewGroupOpen);
  };

  const openNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const logoutHandler = () => {};

  return (
    <>
      <div
        className={`h-16  flex justify-between items-center px-4`}
        style={{ backgroundColor: orange }}
      >
        <div>
          <div className="text-[25px] font-bold text-white hidden sm:block">
            Chat App
          </div>
          <button
            className="block sm:hidden text-white text-2xl"
            onClick={handleMenu}
          >
            
            <MenuIcon className="text-2xl" />
          </button>
        </div>
        <div className="space-x-4 mr-10">
          <IconBtn
            title={"Search"}
            icon={<SearchIcon />}
            onClick={openSearchDialog}
          />
          <IconBtn
            title={"New Group"}
            icon={<AddIcon />}
            onClick={openNewGroup}
          />
          <IconBtn
            title={"Manage Groups"}
            icon={<GroupIcon />}
            onClick={navigateToGroup}
          />
          <IconBtn
            title={"Notification"}
            icon={<NotificationsIcon />}
            onClick={openNotification}
          />
          <IconBtn
            title={"Logout"}
            icon={<LogoutIcon />}
            onClick={logoutHandler}
          />
        </div>
      </div>
      {isSearchOpen && (
        <Suspense fallback={<BackdropLoader />}>
          <SearchDialog
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />
        </Suspense>
      )}
      {isNewGroupOpen && (
        <Suspense fallback={<BackdropLoader />}>
          <NewGroupDialog />
        </Suspense>
      )}
      {isNotificationOpen && (
        <Suspense fallback={<BackdropLoader />}>
          <NotificationsDialog />
        </Suspense>
      )}
    </>
  );
};

export default Header;
