import Reac, { useState } from "react";

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 block sm:hidden`}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-lg font-bold"
      >
        &times;
      </button>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Drawer;
