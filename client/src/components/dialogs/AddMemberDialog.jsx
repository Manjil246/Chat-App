import React, { useState } from "react";
import Dialog from "../../utils/Dialog";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { Cancel as CancelIcon, Done as DoneIcon } from "@mui/icons-material";

const AddMemberDialog = ({
  open,
  onClose,
  addMember,
  isLoadingAddMember,
  groupId,
}) => {
  const [users, setUsers] = useState(sampleUsers);

  const [selectedMembers, setSelectedMembers] = useState([]);

  const addMembersToList = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const cancelHandler = () => {
    setSelectedMembers([]);
    onClose();
  };

  const handlerAddMemberToListLoading = false;

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="flex flex-col w-96 h-64 overflow-auto gap-2">
        <div className="text-3xl">Add Member</div>
        {users.length > 0 ? (
          users.map((user, index) => (
            <UserItem
              user={user}
              handler={addMembersToList}
              handlerIsLoading={handlerAddMemberToListLoading}
              key={index}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))
        ) : (
          <div className="text-center mt-2">No Friends</div>
        )}
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:p-4 gap-2  justify-between items-center mt-2">
        <button
          className="bg-red-900 text-white font-bold py-2 px-4 rounded-full w-fit flex gap-1"
          onClick={cancelHandler}
        >
          <CancelIcon />
          <div>Cancel Changes</div>
        </button>
        <button
          className="bg-green-900 text-white font-bold py-2 px-4 rounded-full w-fit flex gap-1"
          onClick={() => addMember(selectedMembers)}
        >
          <DoneIcon />
          <div>Submit Changes</div>
        </button>
      </div>
    </Dialog>
  );
};

export default AddMemberDialog;
