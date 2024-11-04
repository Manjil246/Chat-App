import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <img
        src="https://avatars.githubusercontent.com/u/10000000?v=4"
        alt="profile"
        className="w-40 h-40 rounded-full border-1 border-white mb-10"
      />
      <ProfileCard heading={"Bio"} text={"Myself Manjil Dhungana."} />
      <ProfileCard
        heading={"Username"}
        text={"muskan_dhungana"}
        icon={<UserNameIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={"Manjil Dhungana"}
        icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment(new Date("2023-01-01")).fromNow()}
        icon={<CalenderIcon />}
      />
    </div>
  );
};

const ProfileCard = ({ text, icon, heading }) => {
  return (
    <div className="flex items-center  gap-4 text-gray-50">
      {icon && icon}
      <div className="flex flex-col items-center">
        <span className="font-bold">{text}</span>
        <span className="text-sm text-gray-400">{heading}</span>
      </div>
    </div>
  );
};

export default Profile;
