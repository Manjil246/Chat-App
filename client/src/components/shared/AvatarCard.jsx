import React from "react";
import { transformImage } from "../../lib/features";


const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <div className="flex">
      {avatar.slice(0, max).map((item, index) => (
        <img
          src={transformImage(item)}
          alt="avatar"
          key={index}
          className="w-12 h-12 rounded-full absolute border-2 border-white top-2"
          style={{ left: `${index * 10 + 10}px` }}
        />
      ))}
    </div>
  );
};

export default AvatarCard;
