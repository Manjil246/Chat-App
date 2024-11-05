import React from "react";
import Dialog from "../../utils/Dialog";
import {
  Cancel as CancelIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

const ConfirmDeleteDialog = ({ open, onClose, confirmDelete }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="flex flex-col w-96 h-32">
        <div className="text-3xl">Confirm Delete</div>
        <div className="text-lg">
          Are you sure you want to delete this group?
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:p-4 gap-2  justify-between items-center mt-2">
          <button
            className="bg-red-900 text-white font-bold py-2 px-4 rounded-full w-fit flex gap-1"
            onClick={onClose}
          >
            <CancelIcon />
            <div>Cancel</div>
          </button>
          <button
            className="bg-green-900 text-white font-bold py-2 px-4 rounded-full w-fit flex gap-1"
            onClick={confirmDelete}
          >
            <DeleteIcon />
            <div>Confirm</div>
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
