import React, { useState } from "react";
import { FiDownload, FiRefreshCcw } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";
import Image from "next/image";
function Step1({getDiscussion,getDiscusionHeader,getid,handleDiscussPdf,discussionRegenrate}) {

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
           
                <p className="description-que">{getDiscusionHeader}</p>
                <div className="question-container">
                    <div className="question-list">
                        <div className="question">
                            <ul>
                                {Array.isArray(getDiscussion) && getDiscussion.map((item, index) => (
                                    <li key={`answer-${index}`}>{item?.question}</li>
                                ))} 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hide_mobile">
                    <div className="btn-container">
                        <button className="btn btn-light-orange" onClick={()=>{handleDiscussPdf(getid,handleShow); }}><FiDownload /> Download PDF</button>
                        <button className="btn btn-light-orange" onClick={()=>{discussionRegenrate()}}><FiRefreshCcw/>Regenerate</button>
                    </div>
                </div>

                <div className="bottom-btn-bar">
                    <div className="bottom-btn-bar-inner flex-column"> 
                        <button type="button" className="btn-bottom bg-color mb-2" onClick={()=>{handleQuizPdf(getid)}}>Download in PDF</button>
                        <button type="button" className="btn-bottom">Regenerate</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step1;