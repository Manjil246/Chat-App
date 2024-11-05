import React from "react";
import { AdminPanelSettings as AdminPanelSettingsIcon } from "@mui/icons-material";

const Dashboard = () => {
  const AppBar = (
    <div className="w-full bg-slate-100 shadow-lg rounded-lg px-4 py-2 flex items-center">
      <div>
        <AdminPanelSettingsIcon sx={{ fontSize: "5rem" }} />
      </div>
      <input type="text" className="px-4 py-2 outline-none rounded md" />
    </div>
  );

  return <div className="w-full h-full flex flex-col p-4">{AppBar}</div>;
};
export default Dashboard;
