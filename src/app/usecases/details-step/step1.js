import React from "react";
import { FiDownload, FiRefreshCcw } from "react-icons/fi";
import { Form } from "react-bootstrap";
function Step1() {
    return (
        <>
            <div className="step-details-container">
                <div className="hide_mobile">
                    <div className="btn-container">
                        <button className="btn btn-light-orange"><FiDownload /> Download PDF</button>
                        <button className="btn btn-light-orange"><FiRefreshCcw />Regenerate</button>
                    </div>
                </div>

                <div className="question-container">
                    <div className="question-list">
                        <div className="question">
                            <div className="question-title">Question 1</div>
                            <div className="question-content">
                                Smoking can lead to numerous health problems. Which of the following is a primary effect of smoking on the respiratory system?
                            </div>
                            <Form className="question-select">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                                        <Form.Check
                                            inline
                                            label="Chronic Obstructive Pulmonary Disease (COPD)"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Improved lung function"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Reduced risk of respiratory infections"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </div>
                        <div className="question">
                            <div className="question-title">Question 2</div>
                            <div className="question-content">
                                Explain how smoking affects cardiovascular health.
                            </div>
                            <div className="form-group">
                                <textarea className="form-control custom-textarea" id="exampleFormControlTextarea1" rows="5" placeholder="Your answer here ..."></textarea>
                                <div className="character-count">0/60 words</div>
                            </div>
                        </div>
                        <div className="question">
                            <div className="question-title">Question 3</div>
                            <div className="question-content">
                                Which of the following is a long-term effect of smoking on overall health?
                            </div>
                            <Form className="question-select">
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                                        <Form.Check
                                            inline
                                            label="Chronic Obstructive Pulmonary Disease (COPD)"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Improved lung function"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Reduced risk of respiratory infections"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </div>
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