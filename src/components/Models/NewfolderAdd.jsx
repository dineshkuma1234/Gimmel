import AuthService from '@/services/AuthService';
import React from 'react'
import { Modal } from 'react-bootstrap';
import { Form } from "react-bootstrap";

function NewfolderAdd({show,handleClose,handleChange,subFolderView,active,addnewFolder,folders,handleGetFolder,handleCreateFolderSub}) {


    
    const handleCreateFolder = async (folders) => {
        // setLoader(true);
        try {
          const result = await AuthService.createFolder(folders);
          // (result, 'result');
          if (result?.success) {
            // setLoader(false);
            handleGetFolder();
            AlertHelper.show('success', 'Gimmel', result?.data);
          } else {
            // setLoader(false);
            AlertHelper.show('danger', 'Gimmel', result?.message);
          }
        } catch (error) {
          // setLoader(false);
          // ('Error occurred:', 'Gimmel', error);
        }
      };
  return (
    <>
      <Modal show={show} onHide={handleClose} centered className='custom-modal new-folder-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>New folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="input-container modal-input">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Folder name</Form.Label>
                                <Form.Control type="text" placeholder=""  onChange={(e) => handleChange(e)}  />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-color-orange" onClick={
                            () => {
                                handleClose();
                                // addNewFolder();
                                if(subFolderView){
                                    handleCreateFolderSub(active,addnewFolder)

                                }
                                else{
                                    handleCreateFolder(folders);
                                }
                              
                                
                            }

                        }>Create folder</button>
                    </div>
                </Modal.Body>
            </Modal>
    
    </>
  )
}

export default NewfolderAdd