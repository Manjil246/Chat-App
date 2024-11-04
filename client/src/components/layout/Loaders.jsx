import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LayoutLoader = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="p-1">
        <Skeleton width={"100%"} height={64} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 h-[calc(100vh-4rem)]">
        <div className="hidden md:block col-span-1 p-1">
          <Skeleton height={"100%"} />
        </div>
        <div className="col-span-2 overflow-hidden space-y-1 p-1">
          {Array.from({ length: 15 }).map((_, i) => (
            <Skeleton height={"60px"} key={i} />
          ))}
        </div>
        <div className="hidden sm:block col-span-1 p-1">
          <Skeleton height={"100%"} />
        </div>
      </div>
    </div>
  );
};

export const BackdropLoader = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-50 bg-gray-100 bg-opacity-80"
      style={{ backdropFilter: "blur(1px)" }} // Add blur effect
    ></div>
  );
};
