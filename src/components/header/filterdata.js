import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { MultiSelect } from "react-multi-select-component";
import { IoSearchSharp } from "react-icons/io5";



function FilterData({handleSearchCont,headerSearch,setShow}) {
    const [selectedAge, setSelectedAge] = useState("");

    const handleClick = (age) => {
        setSelectedAge(age);
    };
    console.log(selectedAge,"selectedAge---")

    const [selectedEngagement, setSelectedEngagement] = useState("");

    const handleClick1 = (engagement) => {
        setSelectedEngagement(engagement);
    };
    // console.log(selectedEngagement,"selectedEngagement---")
    const [selectedDate, setSelectedDate] = useState("");

    const handleClick2 = (date) => {
        setSelectedDate(date);
    };
    // console.log(selectedDate,"selectedDate---")
    const [selectedAudience, setSelectedAudience] = useState("");

    const handleClick3 = (audience) => {
        setSelectedAudience(audience);
    };
    // console.log(selectedAudience,"Audience----");

    const handleResult = (params) => {
        // console.log(params);
    };

    const [selected, setSelected] = useState([]);

    const handleRemove = (value) => {
        setSelected((prevSelected) =>
            prevSelected.filter((item) => item.value !== value)
        );
    };
    const [chips,setChips]=useState([]);
    const [inputValue, setInputValue] = useState('');
    // console.log(inputValue,"inputvalue---");
    const addChip = () => {
        if (inputValue.trim() !== '') {
            setChips([...chips, inputValue]);
            setInputValue('');
        }
    };
    const removeChip = (index) => {
        const newChips = chips.filter((_, i) => i !== index);
        setChips(newChips);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addChip();
        }
    };
    const [sliderValue, setSliderValue] = useState(5);
    const handleSliderChange = (value)=>{
        setSliderValue(value[1]);
    }

    // console.log(sliderValue,"slidervalue");

    const [selectedValue,setSelectedValue] =useState('');

    const handleSelectedChange =(e)=>{
        setSelectedValue(e.target.value);
    }
    // console.log(selectedValue,"duration---")

    const [isOn,setIsOn]=useState(false)

   
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
                            checked={isOn}
                            onChange={(e)=>{setIsOn(e.target.checked)}}
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
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Minimum Age Requirement</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "6-8" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick("6-8")}
                            >
                                6-8
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "8-10" ? "active" : ""}`}
                                id="list-profile-list"
                                onClick={() => handleClick("8-10")}
                            >
                                8-10
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "10-13" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick("10-13")}
                            >
                                10-13
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "13+" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick("13+")}
                            >
                                13+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "16+" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick("16+")}
                            >
                                16+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "18+" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick("18+")}
                            >
                                18+
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
                            {/* <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "10" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick1("10")}
                            >
                                10
                            </button> */}
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "9+" ? "active" : ""}`}
                                id="list-profile-list"
                                onClick={() => handleClick1("9+")}
                            >
                                9+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "7+" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick1("7+")}
                            >
                                7+
                            </button>
                            {/* <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "7" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick1("7")}
                            >
                                7
                            </button> */}
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
                                className={`list-group-item list-group-item-action w-100 ${selectedDate === "NewlyPublished" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick2("NewlyPublished")}
                            >
                                Newly Published
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput5">
                        <Form.Label>Difficulty Level</Form.Label>
                        <Form.Control type="text" placeholder="Set difficulty" value={sliderValue.toString()} readOnly />
                    </Form.Group>
                </div>
                <div className="select-container mt-4">
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
                <div className="dropdown-divider"></div>
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
                                    label={`5-10 Minutes`}
                                    name="group1"
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
                                    label={`15+ Minutes`}
                                    name="group1"
                                    id={`inline-${type}-4`}
                                    value="15"
                                    onChange={handleSelectedChange}
                                />
                            </div>
                        ))}
                    </Form.Group>
                </div>
                <div className="dropdown-divider"></div>
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

                <div className="hide_mobile">
                <button type="button" className="btn-color-orange" onClick={()=>{
                    handleSearchCont(
                    headerSearch,
                    isOn,
                    chips,
                    inputValue,
                    selectedAge,
                    selectedEngagement,
                    selectedDate,
                    sliderValue,
                    selectedValue,
                    selectedAudience,
                )
                setShow(false);
                // console.log(headerSearch,"headerSearch---222")
                }}disabled={!headerSearch}>Apply Filter</button>
                </div>

                <div className="show_mobile">
                    <div className="bottom-bar-modal">
                        <div className="bottom-btn-bar-inner">
                            <button type="button" className="btn-color-orange" data-bs-dismiss="modal"  onClick={()=>{
                                handleSearchCont(
                                    headerSearch,
                                    isOn,
                                    chips,
                                    inputValue,
                                    selectedAge,
                                    selectedEngagement,
                                    selectedDate,
                                    sliderValue,
                                    selectedValue,
                                    selectedAudience,
                                );
                                setShow(false);
                            }} >Apply filters</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FilterData;