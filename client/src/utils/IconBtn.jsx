import React from "react";
import Tooltip from "./Tooltip";

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <button className="text-white text-2xl" onClick={onClick}>
        {icon}
      </button>
    </Tooltip>
  );
};

export default IconBtn;
