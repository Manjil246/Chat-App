import React, { useState } from "react";
import { orange } from "../constants/color";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Tooltip from "../utils/Tooltip";
import { useNavigate } from "react-router-dom";
import Drawer from "../utils/Drawer";

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigateBack = () => {
    navigate("/");
  };

  const handleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 h-screen relative">
        <div
          className="col-span-1 hidden sm:block"
          style={{ backgroundColor: orange }}
        >
          Group List
        </div>
        <div className="col-span-2 flex flex-col py-4 px-12 bg-slate-600 ">
          <div className="flex justify-between h-[10%]">
            <Tooltip title={"Back"}>
              <div
                className="bg-orange-500 text-white p-2 rounded-full "
                onClick={navigateBack}
              >
                <KeyboardBackspaceIcon />
              </div>
            </Tooltip>
            <Tooltip title={"Menu"}>
              <div
                className="bg-orange-500 text-white p-2 rounded-full  sm:hidden block"
                onClick={handleMenu}
              >
                <MenuIcon />
              </div>
            </Tooltip>
          </div>
          <div className="h-[90%]"></div>
        </div>
        <Drawer isOpen={isMobileMenuOpen} onClose={handleMenu} >
          GroupList
        </Drawer>
      </div>
    </>
  );
};

const GroupList = () => {
  return <div>GroupList</div>;
};

export default Group;
