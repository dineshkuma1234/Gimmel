"use client"

import React, { useState } from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { MultiSelect } from "react-multi-select-component";
import { IoSearchSharp } from "react-icons/io5";
import { useHeader } from '@/app/Context/headerContext/HeaderContext';

const options = [
    { label: "Smoking", value: "smoking" },
    { label: "Drug use prevention", value: "drug" },
    { label: "Alcohol use prevention", value: "alcohol" },
    { label: "Physical health", value: "physical" },
    { label: "Mental health", value: "mental" },
];

function Sidebar() {

    const {historyList=[],setHeaderSearch ,headerSearch,handleHistoryList,handleSearchCont}= useHeader();

    console.log(headerSearch,"setHeaderSearch---")

    const [selected, setSelected] = useState([]);
    const [isOn,setIsOn]=useState(false)
    const [chips,setChips]=useState([]);
    const [inputValue, setInputValue] = useState('');
    const [sliderValue, setSliderValue] = useState('');
    const [selectedValue,setSelectedValue] =useState('');

    const handleSelectedChange =(e)=>{
        // console.log("yes it call")
        const newValue = e.target.value; // Get the new selected value
        setSelectedValue(newValue); // Update state
        handleSearchCont(headerSearch,newValue);
    }
    const handleSliderChange = (value)=>{
        const newValue = value[1]; 
        setSliderValue(newValue);
        handleSearchCont(headerSearch,newValue);
    }
    // const addChip = () => {
    //     if (inputValue.trim() !== '') {
    //         setChips([...chips, inputValue]);
    //         setInputValue('');
    //     }
    // };
    // const removeChip = (index) => {
    //     const newChips = chips.filter((_, i) => i !== index);
    //     setChips(newChips);
    // };
    const addChip = () => {
        if (inputValue.trim() !== '') {
            const updatedChips = [...chips, inputValue]; 
            setChips(updatedChips);
            setInputValue('');
            handleSearchCont(headerSearch,updatedChips);
        }
    };
    
    const removeChip = (index) => {
        const updatedChips = chips.filter((_, i) => i !== index);
        setChips(updatedChips);
        handleSearchCont(headerSearch,updatedChips); 
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addChip();
        }
    };

    const handleRemove = (value) => {
        setSelected((prevSelected) =>
            prevSelected.filter((item) => item.value !== value)
        );
    };



    const [selectedAge, setSelectedAge] = useState("18+");

    const handleClick = (age) => {
        setSelectedAge(age);
        handleSearchCont(headerSearch,age);
    };

    const [selectedEngagement, setSelectedEngagement] = useState("");

    const handleClick1 = (engagement) => {
        setSelectedEngagement(engagement);
        handleSearchCont(headerSearch,engagement);
    };

    const [selectedDate, setSelectedDate] = useState("");

    const handleClick2 = (date) => {
        setSelectedDate(date);
        handleSearchCont(headerSearch,date);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedAudience, setSelectedAudience] = useState("");

    const handleClick3 = (audience) => {
        setSelectedAudience(audience);
        handleSearchCont(headerSearch,audience);
    };

    console.log(selectedValue,"selectedValue")


    return (
        <>
            {/* New folder Modal start */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal new-folder-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>New folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="input-container modal-input">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Folder name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-color-orange" onClick={handleClose}>Create folder</button>
                    </div>
                </Modal.Body>
            </Modal>
{/* 
            <div className="search-bar-">
                <input
                    type="text"
                    placeholder="Search in library"
                    className="search-input-bar"
                />
            </div>
            <div className='add-folder'>
                <button
                    type="button"
                    className="btn btn-new-folder"
                    onClick={handleShow}
                >
                    <MdAddCircleOutline /> New Folder
                </button>
            </div> */}
            
            <div className="middle-sidebar">
                <div className="switch-container">
                    <span className="switch-label-text">
                        Show only verified creators/channels
                    </span>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked={isOn}
                            onChange={(e) => {
                                const newValue = e.target.checked;
                                setIsOn(newValue);
                                handleSearchCont(headerSearch,newValue); 
                            }}
                        />
                    </Form>
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Topic of the content</Form.Label>
                        <div>
                            {chips.length > 0 ? (
                                <ul className='selected-list'>
                                    {chips.map((chip, index) => (
                                        <li key={index}>
                                            {chip}
                                            <button
                                                onClick={() => removeChip(index)}
                                                style={{
                                                    marginLeft: "4px",
                                                    color: "#ffffff",
                                                    cursor: "pointer",
                                                    background: "none",
                                                    border: "none",
                                                }}
                                            >
                                                X
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className='search-container d-flex m-0'>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                onBlur={addChip}
                            />
                            <div className='search-button'>
                                <IoSearchSharp />
                            </div>
                        </div>
                    </Form.Group>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Minimum Age Requirement</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                        {["6-8", "8-10", "10-13", "13+", "16+", "18+"].map((age) => (
                <button
                    key={age}
                    className={`list-group-item list-group-item-action ${selectedAge === age ? "active" : ""}`}
                    onClick={() => handleClick(age)}
                >
                    {age}
                </button>
            ))}
                        </div>
                    </div>
                </div>

                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label>Minimum Engagement Rating</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            {["9+","7+"].map((engagement) => (
                                <button
                                    key={engagement}
                                    className={`list-group-item list-group-item-action ${selectedEngagement === engagement ? "active" : ""}`}
                                    onClick={() => handleClick1(engagement)}
                                >
                                    {engagement}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput4">
                        <Form.Label>Date Published</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            {/* <button
                                className={`list-group-item list-group-item-action ${selectedDate === "NewlyPublished" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick2(date)}
                            >
                                Today
                            </button> */}
                            <button
                                className={`list-group-item list-group-item-action w-100 ${selectedDate === "NewlyPublished" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick2("NewlyPublished")}
                            >
                                Newly Published
                            </button>
                    
                        </div>
                    </div>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput5">
                        <Form.Label>Difficulty Level</Form.Label>
                        <Form.Control type="number" placeholder="Set difficulty" value={sliderValue.toString()} readOnly/>
                    </Form.Group>
                </div>
                <div className="select-container">
                    <div className='range-slider-container inline-gap-8'>
                        <div className='number-text'>1</div>
                        <RangeSlider
                            className="single-thumb"
                            min={1}
                            max={10}
                            step={1}
                            defaultValue={[1,sliderValue]}    
                            value={[1,sliderValue]}
                            thumbsDisabled={[true, false]}
                            rangeSlideDisabled={true}
                            onInput={handleSliderChange}
                        />
                        <div className='number-text'>10</div>
                    </div>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput6">
                        <Form.Label>Duration</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    label={`Under 5 Minutes`}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    value="under-5"
                                    onChange={handleSelectedChange}
                                />

                                <Form.Check
                                      name="group1"
                                      label={`5-10 Minutes`}
                                      type={type}
                                      value="5-10"
                                      id={`inline-${type}-2`}
                                      onChange={handleSelectedChange}
                                />

                                <Form.Check
                                  type={type}
                                  label={`10-15 Minutes`}
                                  name="group1"
                                  id={`inline-${type}-3`}
                                  value="10-15"
                                  onChange={handleSelectedChange}
                                />

                                <Form.Check
                                    type={type}
                                    label={`15+`}
                                    name="group1"
                                    id={`inline-${type}-4`}
                                    value="15"
                                    onChange={handleSelectedChange}
                                />
                            </div>
                        ))}
                    </Form.Group>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Primary Audience</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group btn-list-2" id="list-tab" role="tablist">
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

export default Sidebar;