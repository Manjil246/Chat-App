import React, { useState } from "react";
import Dialog from "../../utils/Dialog";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { Search as SearchIcon } from "@mui/icons-material";

const NewGroup = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [groupname, setGroupName] = useState("");

  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const submitHandler = () => {
    console.log(groupname);
  };

  return (
    <Dialog onClose={() => {}} open={true}>
      <div className="flex flex-col w-96 h-96">
        <div className="text-3xl">New Group</div>
        <input
          type="text"
          value={groupname}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Name of group..."
          className="border border-gray-300 rounded-md p-2 mb-2 outline-none w-full"
        />

        <div>Members</div>
        <div className="flex flex-col space-y-2">
          {users.map((user, index) => (
            <UserItem
              key={index}
              user={user}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </div>
        <div className="flex justify-around pt-4">
          <button className="bg-red-500 text-white font-bold p-2 rounded-md">
            Cancel
          </button>
          <button
            className="bg-green-500 text-white font-bold p-2 rounded-md"
            onClick={submitHandler}
          >
            Create
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default NewGroup;
