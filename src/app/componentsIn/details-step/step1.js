import React, { useState } from "react";
import { FiDownload, FiRefreshCcw } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";
import Image from "next/image";
function Step1({getQuiz}) {
// console.log('getQuiz___________++++++++++++++))))', getQuiz)

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
                <div className="hide_mobile">
                    <div className="btn-container">
                        <button className="btn btn-light-blue" onClick={handleShow}><FiDownload /> Download PDF</button>
                        <button className="btn btn-light-blue"><FiRefreshCcw />Regenerate</button>
                    </div>
                </div>

                <div className="question-container">
                    <div className="question-list">
                    {Array.isArray(getQuiz) && getQuiz.map((item, index) => (
                        <div className="question" key={`question-${index}`}>
                            <div className="question-title">Question {item?.number}</div>
                            <div className="question-content">
                                {/* Smoking can lead to numerous health problems. Which of the following is a primary effect of smoking on the respiratory system? */}
                            {item?.question}
                            </div>

                            {item?.type === "open-ended" &&
                            <textarea 
                                className="form-control custom-textarea" 
                                id="exampleFormControlTextarea1" 
                                rows="5" 
                                placeholder="Your answer here ..."
                            ></textarea>
                            }

                           {item?.type === "single-choice" &&
                                <Form className="question-select">
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                                            {item?.options?.map((option, optionIndex) => (
                                            <Form.Check
                                            key={`inline-${type}-${index}-${optionIndex}`}
                                                inline
                                                label={option?.answer}
                                                name={`group-${index}`}
                                                type={type}
                                                id={`inline-${type}-${index}-${optionIndex}`}
                                            />
                                        
                                        ))}
                                        </div>
                                    ))}
                                </Form>
                           }

                           {item?.type === "multiple-choice" &&
                           <Form className="question-select">
                               {['checkbox'].map((type) => (
                                   <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                                       {item?.options?.map((option, optionIndex) => (
                                            <Form.Check
                                            key={`inline-${type}-${index}-${optionIndex}`}
                                                inline
                                                label={option?.answer}
                                                name={`group-${index}`}
                                                type={type}
                                                id={`inline-${type}-${index}-${optionIndex}`}
                                            />
                                        
                                        ))}
                                   </div>
                               ))}
                           </Form>
                           }  
                        </div>
                    ))}  
                    </div>
                </div>

                <div className="bottom-btn-bar">
                    <div className="bottom-btn-bar-inner flex-column"> 
                        <button type="button" className="btn-bottom bg-color mb-2">Download in PDF</button>
                        <button type="button" className="btn-bottom">Regenerate</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step1;