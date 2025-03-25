import React, { useState } from "react";
import { FiDownload, FiRefreshCcw } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";
import Image from "next/image";
function Step3({getActivity,getHeader,getid,handleActivityPdf,activityRegenrate}) {

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
           
                <p className="description-que">{getHeader}</p>
                <div className="question-container">
                    <div className="question-list">
                        <div className="question">
                            <ul className="highlight-list">
                                {Array.isArray(getActivity) && getActivity.map((item, index) => (
                                    <li key={`answer-${index}`}><span className="highlight">{item?.type}: </span> {item?.description}</li>
                                ))} 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hide_mobile">
                    <div className="btn-container">
                        <button className="btn btn-light-orange" onClick={()=>{handleActivityPdf(getid,handleShow); }}><FiDownload /> Download PDF</button>
                        <button className="btn btn-light-orange" onClick={()=>{activityRegenrate()}}><FiRefreshCcw/>Regenerate</button>
                    </div>
                </div>

                <div className="bottom-btn-bar">
                    <div className="bottom-btn-bar-inner flex-column"> 
                        <button type="button" className="btn-bottom bg-color mb-2" onClick={()=>{activityRegenrate()}}>Download in PDF</button>
                        <button type="button" className="btn-bottom">Regenerate</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step3;