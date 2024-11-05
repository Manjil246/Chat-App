import React, { memo } from "react";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id = "1",
  groupChat = false,
  selectedChat = false,
  isOnline,
  newMessage,
  index = 0,
  handleDeleteChat,
  newMessageAlert,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      className="no-underline text-white"
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        className={`flex px-2 justify-around items-center relative w-full h-16
            ${selectedChat ? "bg-black" : "bg-white"} ${
          selectedChat ? "text-white" : "text-black"
        } ${selectedChat ? "" : "hover:bg-[rgba(0,0,0,0.1)]"}`}
      >
        <AvatarCard avatar={avatar} />
        <div className="flex flex-col justify-center w-1/2">
          <div>{name}</div>
          {newMessageAlert && (
            <div className={` text-xs`}>
              {newMessageAlert.count} New Message
            </div>
          )}
        </div>
        {isOnline && (
          <div className="bg-green-500 rounded-full w-2 h-2 absolute top-1/2 right-4 transform"></div>
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
