import moment from "moment";
import React, { memo } from "react";
import { fileFormat } from "../../lib/features";
import RenderContent from "./RenderContent";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachment, createdAt, attachments } = message;

  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div className={`${sameSender ? "self-end" : "self-start"} `}>
      {!sameSender && (
        <div className="text-red-600 font-bold text-sm">{sender?.name}</div>
      )}
      <div className="bg-white text-black rounded-lg p-2 flex flex-col">
        {content && <div>{content}</div>}
        {attachments &&
          attachments.length > 0 &&
          attachments.map((attachment, index) => {
            const url = attachment.url;
            const file = fileFormat(url);
            return (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                download={true}
                key={index}
                className="text-black"
              >
                <RenderContent url={url} file={file} />
              </a>
            );
          })}
      </div>
      <div className="text-sm text-gray-500">{timeAgo}</div>
    </div>
  );
};

export default memo(MessageComponent);
