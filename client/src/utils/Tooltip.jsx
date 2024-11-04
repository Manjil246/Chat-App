import React, { useState } from "react";

const Tooltip = ({ title, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>
      {visible && (
        <div className="absolute z-10 bg-gray-500 text-white text-sm rounded-md p-2">
          {title}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
