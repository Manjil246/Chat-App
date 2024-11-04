export const fileFormat = (url) => {
  const fileExtension = url.split(".").pop().toLowerCase();

  if (
    fileExtension === "mp4" ||
    fileExtension === "webm" ||
    fileExtension === "ogg"
  )
    return "video";
  if (fileExtension === "mp3" || fileExtension === "wav") return "audio";
  if (
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "gif" ||
    fileExtension === "png"
  )
    return "image";

  return "file";
};

export const transformImage = (url, size=100) => url;
