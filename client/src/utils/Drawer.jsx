import React, { useState } from "react";

const Drawer = ({ isOpen, onClose, width = "256px", children }) => {
  return (
    <div
      className={`fixed top-0 left-0  h-full bg-gray-400 shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 block sm:hidden`}
      style={{ width: width }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-lg font-bold text-white"
      >
        &times;
      </button>
      <div className="pt-8">{children}</div>
    </div>
  );
};

export default Drawer;
