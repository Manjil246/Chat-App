import React, { useState } from "react";
import Dialog from "../../utils/Dialog";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";

const Search = ({ isSearchOpen, setIsSearchOpen }) => {
  const [search, setSearch] = useState("");

  const addFriendHandler = (id) => {
    console.log(id);
  };

  let isLoadingFriendRequest = false;

  const [users, setUsers] = useState(sampleUsers);

  return (
    <div>
      <Dialog
        onClose={() => {
          setIsSearchOpen(!isSearchOpen);
        }}
        open={isSearchOpen}
      >
        <div className="flex flex-col w-96 h-96 p-2">
          <div className="text-2xl text-center">Find People</div>
          <div className="relative w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-md p-2 mb-2 outline-none pl-10 w-full"
            />
            <div className="absolute top-2 left-2">
              <SearchIcon />
            </div>
          </div>
          <div className="flex flex-col space-y-2 overflow-auto">
            {users.map((user, index) => (
              <UserItem
                key={index}
                user={user}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingFriendRequest}
              />
            ))}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Search;
