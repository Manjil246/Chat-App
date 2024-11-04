import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  width = "100%",
  chats = [],
  chatId,
  onLineUsers = [],
  newMessagesAlert = [],
  handleDeleteChat,
}) => {
  return (
    <div className="flex flex-col" style={{ width: width }}>
      {chats.map((chat, index) => {
        const newMessageAlert = newMessagesAlert.find(
          (item) => item.chatId === chat._id
        );
        const isOnline = onLineUsers.includes(chat._id);
        return (
          <ChatItem
            avatar={chat.avatar}
            name={chat.name}
            _id={chat._id}
            groupChat={chat.groupChat}
            selectedChat={chatId === chat._id}
            newMessage={chat.newMessage}
            index={index}
            handleDeleteChat={handleDeleteChat}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
