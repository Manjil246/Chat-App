import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = (WrappedComponent) => {
  return (props) => {
    const handleDeleteChat = (e, _id, groupChat) => {};
    const { chatId } = useParams();
    return (
      <>
        <Title />
        <Header />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  h-[calc(100vh-4rem)]">
          <div className="h-full hidden md:block col-span-1">
            <ChatList
              chats={sampleChats}
              handleDeleteChat={handleDeleteChat}
              chatId={chatId}
              onLineUsers={["2", "3"]}
              newMessagesAlert={[{ chatId: "3", count: 2 }]}
            />
          </div>
          <div className="col-span-2">
            <WrappedComponent {...props} />
          </div>
          <div className="bg-black h-full hidden sm:block p-8 col-span-1">
            <Profile />
          </div>
        </div>
      </>
    );
  };
};

export default AppLayout;
