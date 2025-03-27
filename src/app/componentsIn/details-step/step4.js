import React, { useState } from "react";
import { FiDownload, FiRefreshCcw } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";
import Image from "next/image";
function Step4({getHomeWork,getHeader,getid,handleHomeWorkPdf,homeworkRegenrate}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            {/* Download Successful Modal */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal success-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Download was successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon">
                            <Image src={require("../../../assets/images/Untitled_Artwork.svg")} alt="Success" />
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-color-orange" onClick={handleClose}>Okay</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <div className="step-details-container">
           
                <p className="description-que">Select two of the homework assignments listed below:</p>
                <div className="question-container">
                    <div className="question-list">
                        <div className="questions">
                            <ul className="highlight-list">
                                {Array.isArray(getHomeWork) && getHomeWork.map((item, index) => (
                                    <li key={`answer-${index}`}> {item.replace(/^\d+\.\s*/, '').trim()}</li>
                                ))} 
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="hide_mobile"> */}
                    <div className="btn-container">
                        <button className="btn btn-light-orange" onClick={()=>{handleHomeWorkPdf(getid,handleShow); }}><FiDownload /> Download PDF</button>
                        <button className="btn btn-light-orange" onClick={()=>{homeworkRegenrate()}}><FiRefreshCcw/>Regenerate</button>
                    </div>
                {/* </div> */}

                {/* <div className="bottom-btn-bar">
                    <div className="bottom-btn-bar-inner flex-column"> 
                        <button type="button" className="btn-bottom bg-color mb-2" onClick={()=>{handleHomeWorkPdf()}}>Download in PDF</button>
                        <button type="button" className="btn-bottom">Regenerate</button>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Step4;