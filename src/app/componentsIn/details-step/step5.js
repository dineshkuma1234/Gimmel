import React, { useState } from "react";
import { FiDownload, FiRefreshCcw } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";
import Image from "next/image";
function Step5({getTest,getid,handleTestPdf,TestRegenrate}) {

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
           

                <div className="question-container">
                    <div className="question-list">
                    {Array.isArray(getTest) && getTest.map((item, index) => (
                        <div className="question" key={`question-${index}`}>
                        <div className="question-title">Task {item.taskNumber}</div>
                            <div className="question-content">
                                {/* Smoking can lead to numerous health problems. Which of the following is a primary effect of smoking on the respiratory system? */}
                            {item?.question}
                            </div>

                            {item?.inputType === "open-ended" && 
                            <>
                            <textarea 
                                className="form-control custom-textarea" 
                                id="exampleFormControlTextarea1" 
                                rows="5" 
                                placeholder="Your answer here ..."
                            ></textarea>
                              <span className="question-content">0/60 words</span>

                              </>  
                            }
                            
                            {item?.inputType=== "multiple-choice" &&
                              <div class="textarea-container">
                              <input 
                                    className="form-control custom-input input-border" 
                                    id="exampleFormControlInput1" 
                                    type="text" 
                                    placeholder="Your answer here ..."
                                />
                                <input 
                                    className="form-control custom-input input-border" 
                                    id="exampleFormControlInput2"  
                                    type="text" 
                                    placeholder="Your answer here ..."
                                />
                                <input 
                                    className="form-control custom-input input-border" 
                                    id="exampleFormControlInput3" 
                                    type="text" 
                                    placeholder="Your answer here ..."
                                />
                                <input 
                                    className="form-control custom-input input-border" 
                                    id="exampleFormControlInput4" 
                                    type="text" 
                                    placeholder="Your answer here ..."
                                />
                                <input 
                                    className="form-control custom-input input-border" 
                                    id="exampleFormControlInput5" 
                                    type="text" 
                                    placeholder="Your answer here ..."
/>

                              </div>
                            

                            }
                            
                            
                        </div>
                    ))}  
                    </div>
                </div>
               
                    <div className="btn-container mt-3">
                        <button className="btn btn-light-orange" onClick={()=>{handleTestPdf(getid,handleShow); }}><FiDownload /> Download PDF</button>
                        <button className="btn btn-light-orange" onClick={()=>{TestRegenrate()}}><FiRefreshCcw/>Regenerate</button>
                    </div>
                

                {/* <div className="bottom-btn-bar">
                    <div className="bottom-btn-bar-inner flex-column"> 
                        <button type="button" className="btn-bottom bg-color mb-2" onClick={()=>{handleQuizPdf(getid)}}>Download in PDF</button>
                        <button type="button" className="btn-bottom">Regenerate</button>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Step5;