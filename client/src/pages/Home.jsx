import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { gray } from "../constants/color";

const Home = () => {
  return (
    <div
      className="text-3xl text-center font-bold bg-gray-50 h-full w-full pt-[20vh]"
      style={{ backgroundColor: gray }}
    >
      <span> Select a friend to Chat</span>
    </div>
  );
};

export default AppLayout(Home);
