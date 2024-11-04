import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import React, { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading, isAdded }) => {
  const { name, _id, avatar } = user;

  return (
    <div className="flex items-center space-x-4">
      <img src={avatar} className="w-8 h-8 rounded-full" />
      <span className="w-full">{name}</span>
      <button
        onClick={() => handler(_id)}
        disabled={handlerIsLoading}
        className={`w-14 h-10 rounded-full  ${
          isAdded ? "bg-red-500" : "bg-blue-500"
        } ${isAdded ? "hover:bg-red-700" : "hover:bg-blue-700"} text-white`}
      >
        {isAdded ? (
          <RemoveIcon className="font-bold" />
        ) : (
          <AddIcon className="font-bold" />
        )}
      </button>
    </div>
  );
};

export default memo(UserItem);
