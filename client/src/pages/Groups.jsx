import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import { orange } from "../constants/color";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Tooltip from "../utils/Tooltip";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Drawer from "../utils/Drawer";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import { BackdropLoader } from "../components/layout/Loaders";
import UserItem from "../components/shared/UserItem";
const AddMemberDialog = lazy(() =>
  import("../components/dialogs/AddMemberDialog")
);
const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDialog")
);

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameEdit, setGroupNameEdit] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const groupId = useSearchParams()[0].get("group");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [addMemberDialog, setAddMemberDialog] = useState(false);
  const navigateBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (groupId) {
      setGroupName("Group name");
      setGroupNameEdit("");
    }
    return () => {
      setIsEdit(false);
      setGroupName("");
      setGroupNameEdit("");
    };
  }, [groupId]);

  const handleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const updateGroupName = () => {
    setGroupName(groupNameEdit);
    setIsEdit(false);
  };

  const openConfirmDeleteDialog = () => {
    setConfirmDeleteDialog(true);
  };

  const closeConfirmDeleteDialog = () => {
    setConfirmDeleteDialog(false);
  };

  const deleteGroupHandler = () => {
    console.log("Delete Group");
    closeConfirmDeleteDialog();
  };
  const addMemberHandler = (members) => {
    console.log("Added members", members);
    closeAddMemberDialog();
  };

  const openAddMemberDialog = () => {
    setAddMemberDialog(true);
  };

  const closeAddMemberDialog = () => {
    setAddMemberDialog(false);
  };

  const removeMemberHandler = (_id) => {
    console.log("Removed member", _id);
  };

  const IconButtons = (
    <>
      <Tooltip title={"Back"}>
        <div
          className="bg-orange-500 text-white p-2 rounded-full "
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </div>
      </Tooltip>
      <Tooltip title={"Menu"}>
        <div
          className="bg-orange-500 text-white p-2 rounded-full  sm:hidden block"
          onClick={handleMenu}
        >
          <MenuIcon />
        </div>
      </Tooltip>
    </>
  );

  const GroupName = (
    <>
      <div className="text-3xl font-bold text-white flex justify-center items-center space-x-2">
        {isEdit ? (
          <>
            <input
              className="bg-transparent outline-none border border-white rounded-lg p-2"
              value={groupNameEdit}
              onChange={(e) => setGroupNameEdit(e.target.value)}
              required
            />
            <div
              className="cursor-pointer"
              onClick={() => {
                if (groupNameEdit.length > 0) updateGroupName();
              }}
            >
              <DoneIcon disabled={groupNameEdit.length === 0} />
            </div>
          </>
        ) : (
          <>
            <span>
              {groupName} {groupId}
            </span>
            <div
              className="cursor-pointer"
              onClick={(e) => {
                setIsEdit(true);
                setGroupNameEdit(groupName);
              }}
            >
              <EditIcon />
            </div>
          </>
        )}
      </div>
    </>
  );

  const ButtonGroup = (
    <div className="flex flex-col-reverse sm:flex-row sm:p-4 gap-2  justify-between items-center mt-2">
      <button
        className="bg-red-900 text-white font-bold py-2 px-4 rounded-full w-fit"
        onClick={openConfirmDeleteDialog}
      >
        <DeleteIcon />
        Delete Group
      </button>
      <button
        className="bg-green-900 text-white font-bold py-2 px-4 rounded-full w-fit"
        onClick={openAddMemberDialog}
      >
        <AddIcon />
        Add member
      </button>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 h-screen relative">
        <div className="col-span-1 hidden sm:block bg-orange-500 ">
          <GroupList myGroups={sampleChats} groupId={groupId} />
        </div>
        <div className="col-span-2 flex flex-col py-4 px-12 bg-white ">
          <div className="flex justify-between h-[10vh]">{IconButtons}</div>
          <div className="h-[85vh]">
            {groupName ? (
              <>
                {GroupName}
                <span className="text-white">Members</span>
                <div className="flex flex-col overflow-y-auto h-[45vh] space-y-2 p-4 w-full">
                  {sampleUsers.length > 0 ? (
                    sampleUsers.map((user, index) => (
                      <UserItem
                        user={user}
                        key={index}
                        isAdded={true}
                        styling={{
                          boxShadow: "5px 5px 2px 2px rgba(0,0,0,0.2)",
                          padding: "5px",
                          borderRadius: "5px",
                          border: "1px solid rgba(0,0,0,0.2)",
                        }}
                        handler={removeMemberHandler}
                      />
                    ))
                  ) : (
                    <div className="flex justify-center items-center">
                      <p className="text-white">No members</p>
                    </div>
                  )}
                </div>
                {ButtonGroup}
              </>
            ) : (
              <div className="text-center">
                <p className="text-3xl">No Group Selected</p>
              </div>
            )}
          </div>
        </div>
        <Drawer isOpen={isMobileMenuOpen} onClose={handleMenu}>
          <GroupList myGroups={sampleChats} groupId={groupId} />
        </Drawer>
      </div>

      {confirmDeleteDialog && (
        <Suspense fallback={<BackdropLoader />}>
          <ConfirmDeleteDialog
            onClose={closeConfirmDeleteDialog}
            open={confirmDeleteDialog}
            confirmDelete={deleteGroupHandler}
          />
        </Suspense>
      )}

      {addMemberDialog && (
        <Suspense fallback={<BackdropLoader />}>
          <AddMemberDialog
            onClose={closeAddMemberDialog}
            open={addMemberDialog}
            addMember={addMemberHandler}
            isLoadingAddMember={false}
            groupId={groupId}
          />
        </Suspense>
      )}
    </>
  );
};

const GroupList = ({ w = "100%", myGroups = [], groupId }) => (
  <div className="flex flex-col h-[calc(100vh-2rem)] overflow-y-auto">
    {myGroups.length > 0 ? (
      myGroups.map((group, index) => {
        return <GroupListItem key={index} group={group} groupId={groupId} />;
      })
    ) : (
      <div>No Group</div>
    )}
  </div>
);

const GroupListItem = memo(({ group, groupId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      className="no-underline text-white hover:bg-orange-700"
      onClick={(e) => {
        if (groupId === _id) {
          e.preventDefault();
        }
      }}
    >
      <div className="justify-center w-full h-16  relative  flex items-center ">
        <AvatarCard avatar={avatar} />
        <div>{name}</div>
      </div>
    </Link>
  );
});

export default Group;
