import React, { useState } from "react";
import { FiDownload, FiRefreshCcw } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";
import Image from "next/image";
import { useModal } from "@/components/registerpop/page";
function Step1({getQuiz,handleQuizPdf,getid,quizRegenrate}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [text,setText]=useState("");
      const { openModal,setIsOpen } = useModal(); 
    
    const maxWord=60

    const handleChange = (e) => {
        const words = e.target.value.trim().split(/\s+/); 
        if (words.length <= maxWord) {
            setText(e.target.value); 
        }
    };
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
                    {Array.isArray(getQuiz) && getQuiz.map((item, index) => (
                        <div className="question" key={`question-${index}`}>
                            <div className="question-title">Question {item?.number}</div>
                            <div className="question-content">
                                {/* Smoking can lead to numerous health problems. Which of the following is a primary effect of smoking on the respiratory system? */}
                            {item?.question}
                            </div>

                            {item?.type === "open-ended" &&
                            <>
                            <textarea 
                                className="form-control custom-textarea" 
                                id="exampleFormControlTextarea1" 
                                rows="5" 
                                placeholder="Your answer here ..."
                                value={text}
                                onChange={handleChange}
                            ></textarea>
                            <span className="question-content">{text.trim().split(/\s+/).filter(Boolean).length}/{maxWord} words</span>
                            </>
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
                    <div className="btn-container">
                        <button className="btn btn-light-orange" 
                        onClick={(e) => {
                            const token = localStorage.getItem("token");
                            if (!token) {
                            e.preventDefault(); // Prevents navigation
                            setIsOpen(true);
                            } else {
                                handleQuizPdf(getid,handleShow)     
                         }
                        }}
                        ><FiDownload /> Download PDF</button>
                        <button className="btn btn-light-orange"
                         onClick={(e) => {
                            const token = localStorage.getItem("token");
                            if (!token) {
                            e.preventDefault(); // Prevents navigation
                            setIsOpen(true);
                            } else {
                                quizRegenrate()
                        }
                        }}
                         ><FiRefreshCcw/>Regenerate</button>
                    </div>
            </div>
        </>
    );
}

export default Step1;