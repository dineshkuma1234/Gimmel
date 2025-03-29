import React, { useState } from "react";
import { FiDownload, FiRefreshCcw } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";
import Image from "next/image";

function Step5({ getTest, getid, handleTestPdf, TestRegenrate }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [textValues, setTextValues] = useState({}); // Object to store text per input
    const maxWord = 60;

    const handleChange = (e, questionIndex, inputIndex) => {
        const words = e.target.value.trim().split(/\s+/);
        if (words.length <= maxWord) {
            setTextValues(prev => ({
                ...prev,
                [`${questionIndex}-${inputIndex}`]: e.target.value // Unique key for each input
            }));
        }
    };

    return (
        <>
            {/* Download Successful Modal */}
            <Modal show={show} onHide={handleClose} centered className="custom-modal success-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Download was successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon">
                            <Image src={require("../../../assets/images/Untitled_Artwork.svg")} alt="Success" />
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-color-orange" onClick={handleClose}>
                                Okay
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="step-details-container">
                <div className="question-container">
                    <div className="question-list">
                        {Array.isArray(getTest) &&
                            getTest.map((item, questionIndex) => (
                                <div className="question" key={`question-${questionIndex}`}>
                                    <div className="question-title">Task {item.taskNumber}</div>
                                    <div className="question-content">{item?.question}</div>

                                    {/* Open-ended Textarea */}
                                    {item?.inputType === "open-ended" && (
                                        <>
                                            <textarea
                                                className="form-control custom-textarea"
                                                rows="5"
                                                placeholder="Your answer here ..."
                                                value={textValues[`${questionIndex}-0`] || ""}
                                                onChange={(e) => handleChange(e, questionIndex, 0)}
                                            ></textarea>
                                            <span className="question-content">
                                                {textValues[`${questionIndex}-0`]?.trim().split(/\s+/).filter(Boolean).length || 0}/{maxWord} words
                                            </span>
                                        </>
                                    )}

                                    {/* Multiple Choice Inputs */}
                                    {item?.inputType === "multiple-choice" && (
                                        <>
                                            <div className="textarea-container">
                                                {[...Array(5)].map((_, inputIndex) => (
                                                    <div key={`input-wrapper-${questionIndex}-${inputIndex}`}>
                                                        <input
                                                            className="form-control custom-input input-border"
                                                            type="text"
                                                            placeholder="Your answer here ..."
                                                            value={textValues[`${questionIndex}-${inputIndex}`] || ""}
                                                            onChange={(e) => handleChange(e, questionIndex, inputIndex)}
                                                        />
                                                        <span className="question-content">
                                                            {textValues[`${questionIndex}-${inputIndex}`]?.trim().split(/\s+/).filter(Boolean).length || 0}/{maxWord} words
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>

                <div className="btn-container mt-3">
                    <button className="btn btn-light-orange" onClick={() => handleTestPdf(getid, handleShow)}>
                        <FiDownload /> Download PDF
                    </button>
                    <button className="btn btn-light-orange" onClick={() => TestRegenrate()}>
                        <FiRefreshCcw /> Regenerate
                    </button>
                </div>
            </div>
        </>
    );
}

export default Step5;
