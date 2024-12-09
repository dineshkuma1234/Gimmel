import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
// import Multiselect from 'multiselect-dropdown-react';


const data = [{
    name: 'Smoking',
    value: 'Smoking'
},
{
    name: 'Durg use prevention',
    value: 'Durg use prevention'
},
{
    name: 'Alcohol use prevention',
    value: 'Alcohol use prevention'
},
{
    name: 'Physical health',
    value: 'Physical health'
},
{
    name: 'Mental health',
    value: 'Mental health'
},
{
    name: 'Sexual health',
    value: 'Sexual health'
}
];

function FilterData() {
    const [selectedAge, setSelectedAge] = useState("18+");

    const handleClick = (age) => {
        setSelectedAge(age);
    };

    const [selectedEngagement, setSelectedEngagement] = useState("");

    const handleClick1 = (engagement) => {
        setSelectedEngagement(engagement);
    };

    const [selectedDate, setSelectedDate] = useState("");

    const handleClick2 = (date) => {
        setSelectedDate(date);
    };

    const [selectedAudience , setSelectedAudience] = useState("");

    const handleClick3 = (audience) => {
        setSelectedAudience(audience);
    };

    const handleResult = (params) => {
        console.log(params);
    };

    return (
        <>
            <div className="middle-section">
                <div className="switch-container">
                    <span className="switch-label-text">
                        Show only verified creators/channels
                    </span>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </Form>
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Topic of the content</Form.Label>
                        {/* <Multiselect
                            options={data}
                            onSelectOptions={handleResult}
                            customArrow={
                                <span style={{ marginLeft: '8px', cursor: 'pointer' }}>▼</span>
                            } // Custom dropdown icon
                        /> */}
                    </Form.Group>
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Minimum Age Requirement</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "18+" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick("18+")}
                            >
                                18+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "21+" ? "active" : ""}`}
                                id="list-profile-list"
                                onClick={() => handleClick("21+")}
                            >
                                21+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "25+" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick("25+")}
                            >
                                25+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "30+" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick("30+")}
                            >
                                30+
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label>Minimum Engagement Rating</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "10" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick1("10")}
                            >
                                10
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "9" ? "active" : ""}`}
                                id="list-profile-list"
                                onClick={() => handleClick1("9")}
                            >
                                9
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "8" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick1("8")}
                            >
                                8
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "7" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick1("7")}
                            >
                                7
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput4">
                        <Form.Label>Date Published</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button
                                className={`list-group-item list-group-item-action ${selectedDate === "Today" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick2("Today")}
                            >
                                Today
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedDate === "This week" ? "active" : ""}`}
                                id="list-profile-list"
                                onClick={() => handleClick2("This week")}
                            >
                                This week
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedDate === "This month" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick2("This month")}
                            >
                                This month
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedDate === "This year" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick2("This year")}
                            >
                                This year
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput5">
                        <Form.Label>Difficulty Level</Form.Label>
                        <Form.Control type="text" placeholder="Set difficulty" />
                    </Form.Group>
                </div>
                <div className="select-container mt-4 mb-4">
                    <RangeSlider
                        className="single-thumb"
                        defaultValue={[0, 50]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput6">
                        <Form.Label>Duration</Form.Label>
                        <Form.Check type="radio" aria-label="radio 1" label="Less than 4 minutes " />
                        <Form.Check type="radio" aria-label="radio 2" label="4-8 minutes" />
                        <Form.Check type="radio" aria-label="radio 3" label="8-12 minutes" />
                        <Form.Check type="radio" aria-label="radio 4" label="More than 12 minutes" />
                    </Form.Group>
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Primary Audience</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button
                                className={`list-group-item list-group-item-action ${selectedAudience === "Student" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick3("Student")}
                            >
                                Student
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAudience === "Parent" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick3("Parent")}
                            >
                                Parent
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAudience === "Other" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick3("Other")}
                            >
                                School staff
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterData;