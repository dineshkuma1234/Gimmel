import React from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import AuthService from "@/services/AuthService";

const RenameModel = ({
  renameModel,
  show7,
  setSubfolder,
  rename,
  setRename,
  handleClose7,
  setRenameModel,
  handleGetFolder,
  isDropdownOpenid,
  getFolder,
  getSubFolder,
  subfolderid,
  selectedFolderId
}) => {
  const id = isDropdownOpenid?._id;


  const handleRename = async (rename, id) => {
    // setLoader(true);
    try {
      const result = await AuthService.renames(rename, id);

      if (result?.success) {
        // setLoader(false);
        handleGetFolder();
        setRename("");
        // AlertHelper.show('success', 'Gimmel', result?.message);
      } else {
        // setLoader(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };


  const handleRenameFolder = async (rename,selectedFolderId) => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.RenameSubFolder(id,rename,selectedFolderId);
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('success', 'Gimmel', result?.message);
        handleGetFolder();
        setRename();
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message  );
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
    }
  };




  return (
    <Modal
      open={renameModel}
      show={show7}
      onHide={() => {
        handleClose7();
      }}
      onClick={() => setSubfolder("Subfolder")}
      centered
      className="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Rename folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-container">
          <div className="input-container modal-input">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Folder name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={rename}
                onChange={(event) => setRename(event.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="btn-container">
          <button
            className="btn btn-color-orange"
            onClick={(event) => {
              if (getSubFolder) {
                // console.log("test-+1");
                handleRenameFolder(rename,selectedFolderId);  // Agar getSubFolder exist kare to yeh chale
              } else {
                // console.log("test-+2");
                handleRename(rename, id); // Agar getFolder exist kare to yeh chale
              }
              handleClose7(); // Modal ya dropdown close kare
              setRenameModel(false); // Modal ko close kare
            }}
          >
            Save
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RenameModel;
