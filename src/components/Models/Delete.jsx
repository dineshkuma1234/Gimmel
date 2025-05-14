import React from "react";
import { Modal } from "react-bootstrap";
import { FiAlertOctagon } from "react-icons/fi";

function DeleteModel({
  deleteModel,
  show,
  handleClose,
  handleDeleteFolder,
  setDeleteModel,
  isDropdownOpenid,
  selectedFolderId,
  getSubFolder,
  handleDeleteSubFolder,
  selectFolder
}) {

  return (
    <>
      <Modal
        open={deleteModel}
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal"
      >
        <Modal.Body>
          <div className="modal-body-container">
            <div className="icon-container d-flex justify-content-center">
              <FiAlertOctagon />
            </div>
            <div className="title-container d-flex justify-content-center align-items-center">
              <p className="modal-title">Are you sure?</p>
            </div>
            <div className="input-container modal-input">
              <p className="modal-text text-center">
                Do you want to delete this folder? This action cannot be undone.
              </p>
            </div>
          </div>
          <div className="btn-container d-flex gap-3">
            <button
              className="btn btn-color-orange"
              // onClick={(event) => {
              //   event.stopPropagation();
              //   handleDeleteFolder(isDropdownOpenid?._id);
              //   setDeleteModel(true);
              //   handleClose();
              // }}

              onClick={(event) => {
                // if (getSubFolder.length === 0) {
                  // console.log("3-test-+");
                  handleDeleteFolder(isDropdownOpenid?._id);
                 
                // } else {
                //   console.log("3-test----");
                //   handleDeleteSubFolder(selectFolder, isDropdownOpenid?._id);
                //   // console.log("-2-+");
                // }
                setDeleteModel(true);
                handleClose();
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-color-orange-outline"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteModel;
