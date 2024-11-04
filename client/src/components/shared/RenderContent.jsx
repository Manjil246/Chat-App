import React from "react";
import { transformImage } from "../../lib/features";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

const RenderContent = ({ file, url }) => {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={200} controls />;
    case "audio":
      return <audio src={url} preload="none" controls />;
    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt="Attachment"
          width={200}
          height={150}
          className="object-contain"
        />
      );
    default:
      return <FileOpenIcon />;
  }
};

export default RenderContent;
