import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { gray, orange } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import FileMenu from "../components/dialogs/FileMenu";
import { SampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const Chat = () => {
  const containerRef = useRef(null);

  const user = {
    _id: "jnsjn",
    name: "Rakesh",
  };

  return (
    <>
      {/* Messages */}
      <div
        className="flex flex-col h-[90%] overflow-y-auto p-4 overflow-x-hidden"
        style={{ backgroundColor: gray }}
        ref={containerRef}
      >
        {SampleMessage.map((message, index) => {
          return <MessageComponent message={message} user={user} key={index} />;
        })}
      </div>

      {/* Input */}
      <form className="h-[10%]">
        <div className="flex justify-between h-full items-center relative">
          <button className="p-2 absolute left-2 rotate-[30deg]">
            <AttachFileIcon />
          </button>
          <input
            type="text"
            className="w-full h-1/2 border-none outline-none px-12 rounded-md"
            style={{ backgroundColor: gray }}
            placeholder="Type Message..."
          />
          <button
            type="submit"
            className="p-2 rounded-full text-white ml-4 mr-2 bg-orange-500 hover:bg-orange-600 -rotate-[30deg]"
          >
            <SendIcon />
          </button>
        </div>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout(Chat);
