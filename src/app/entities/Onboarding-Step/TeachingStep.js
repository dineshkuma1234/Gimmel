import React, { useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Form, ListGroup } from "react-bootstrap";
import Image from "next/image";
import ReactSlider from "react-slider";
import Link from "next/link";

const TeachingStep = ({ handleOnboarding, teachingTopic, contentMaturity, teachingLocation, eduction, handleNavigateHomeScreen, handleSkipData }) => {
    const images = [
        
        require("../../../assets/images/Artwork.svg"),
        require("../../../assets/images/step-3.svg"),
        require("../../../assets/images/step-4.svg"),
        require("../../../assets/images/18+.svg"),
        require("../../../assets/images/stap-6.svg"),
    ];

    const [checkedItems1, setCheckedItems1] = useState({});
    const [selectAll, setSelectAll] = useState(false);
    const [selectAll1, setSelectAll1] = useState(false);
    const [selectAll3, setSelectAll3] = useState(false);
    const [checkedItems3, setCheckedItems3] = useState({});
    const [selected, setSelected] = useState('');

    const [selectedval, setSelectedval] = useState([])
// ;    ( selected,'selected----');
    const handleSelect = (label) => {
        setSelected(label);
        const arr =[label];
        setSelectedval(arr);
        // ( arr,'selected value---',);
    };
    // (handleSelect,'handleSelect----');
    const [minValue, setMinValue] = useState(12);
    const [maxValue, setMaxValue] = useState(30);
    const [sliderValues, setSliderValues] = useState([])

    const handleSliderChange = ([min, max]) => {
        setMinValue(min);
        setMaxValue(max);
        const arr = [min, max]
        setSliderValues(arr);
        // ('min max array', arr);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const changeSlide = (index) => {
        if (index < 0) {
            setCurrentIndex(0);
        } else if (index >= images.length) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(index);
        }
    };

    const previousSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const [checkedItems, setCheckedItems] = useState({});

    const [item,setItems]=useState([]);
    const [selectedmaturity,setselectedMaturity] =useState([])
    const [slectedEducation,setSelectedEducation]=useState([])

    useEffect(()=>{
        // (item, 'my item is here')
    },[item,selectedmaturity,slectedEducation]);

    const handleChange = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all") {
            const newCheckedState = {};
            const newArr=filteredTopics.map((topic) => {newCheckedState[topic.name] = checked
                return topic.name
            }); 
            if (checked) {
                setItems(newArr);
            } else {
                setItems([]);
            }
            setCheckedItems(newCheckedState);
            setSelectAll(checked); 
        } else {
            setCheckedItems({
                ...checkedItems,
                [id]: checked,
            });
            setItems((prevItems) =>{
                if(checked){
                return [...prevItems, id]
                }else{
                    return prevItems.filter((item)=>item!==id)
                }
            });
        }
    };

   
   
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all") {
            const newCheckedState = {};
            const newArr=filterContentMaturity.map((item) => {newCheckedState[item.name] = checked
                return item.name
            }); // Select/Deselect all topics
            // setselectedMaturity((prev)=>[...prev,...newArr])
            setselectedMaturity(checked ? newArr : []);
            setCheckedItems1(newCheckedState);
            setSelectAll1(checked); // Update button behavior
        } else {
            setCheckedItems1({
                ...checkedItems1,
                [id]: checked,
            });
            setselectedMaturity((prevItems)=>{
                if(checked){
                    return [...prevItems,id]
                }else{
                    return prevItems.filter((item)=>item!==id)
                }
            })
        }
    };

//  (slectedEducation,"slectedEducation----")
    const handleChangeeducation = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all") {
            const newCheckedState = {};
            const newArr=eduction.map((item) => {newCheckedState[item.name] = checked
                return item.name
            }); // Select/Deselect all topics
            setSelectedEducation(checked ? newArr : [])
            setCheckedItems3(newCheckedState);
            setSelectAll3(checked); 
        } else {
            setCheckedItems3({
                ...checkedItems3,
                [id]: checked,
            });
            setSelectedEducation((prevItems) => {
                if (checked) {
                    return [...prevItems, id]; 
                } else {
                    return prevItems.filter((item) => item !== id); 
                }
            });
        }
    };

    const [selectedItems, setSelectedItems] = useState({
        'deselect-all': false,
        'abuse': false,
        'death': false,
        'discussions': false,
        'disturbing': false,
        'gore': false,
        'sexual': false,
    });

    const handleSelectAllChange = (e) => {
        const isChecked = e.target.checked;
        setSelectedItems((prevState) => {
            const newState = Object.keys(prevState).reduce((acc, key) => {
                acc[key] = isChecked;
                return acc;
            }, {});
            return newState;
        });
    };

    const handleCheckboxChange1 = (e) => {
        const { id, checked } = e.target;
        setSelectedItems((prevState) => ({
            ...prevState,
            [id]: checked,
        }));
    };


    const handleInputChange = (e, type) => {
        const value = parseInt(e.target.value, 10);

        if (type === "min" && value < maxValue && value >= 10) {
            setMinValue(value);
        }

        if (type === "max" && value > minValue && value <= 70) {
            setMaxValue(value);
        }
    };
    const [searchTerm, setSearchTerm] = useState('');
    const filteredTopics = teachingTopic.filter(topic =>
        topic.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [maturity, setMaturity] = useState("")
    const filterContentMaturity = contentMaturity.filter(item =>
        item.name.toLowerCase().includes(maturity.toLowerCase())
    );

    return (
        <div className="main-screen">
            <div className="row align-items-center">
                {/* Left Banner Section */}
                <div className="col-md-7">
                    <div className="left-banner remove-shadow">
                        <div className="left-banner-content">
                            <div className="banner-image">
                                <Image id="slider-image" src={images[currentIndex]} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Banner Section */}
                <div className="col-md-5">
                    <div className="right-banner">
                        <div className="right-side-content question-select">
                            {/* Content Sections */}
                            <div
                                className={`content-section ${currentIndex === 0 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Are you a...</h1>
                                </div>
                                <div className="banner-btn-inner">
                                    <button
                                        className={`btn-border ${selected === "School staff member" ? "selected" : ""}`}
                                        onClick={() => handleSelect("School staff member")}
                                    >
                                        School staff member
                                    </button>
                                    <button
                                        className={`btn-border ${selected === "Parent/guardian" ? "selected" : ""}`}
                                        onClick={() => handleSelect("Parent/guardian")}
                                    >
                                        Parent/guardian
                                    </button>
                                </div>
                            </div>

                            <div
                                className={`content-section ${currentIndex === 1 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>What is the age range of the students you teach?</h1>
                                </div>
                                <div className="age-range">
                                    <div className="range-name">Minimum age</div>
                                    <div className="wrapper">
                                        <div className="inline-wrapper">
                                            <div
                                                className="min-age"
                                                style={{ fontWeight: "bold", color: "#104E5B" }}
                                            >
                                                {minValue}
                                            </div>
                                            <div className="slider-inner">
                                                <ReactSlider
                                                    className="slider"
                                                    thumbClassName="thumb"
                                                    trackClassName="track"
                                                    min={10}
                                                    max={70}
                                                    value={[minValue, maxValue]}
                                                    onChange={handleSliderChange}
                                                    pearling
                                                    minDistance={1}
                                                />
                                            </div>
                                            <div
                                                className="max-age"
                                                style={{ fontWeight: "bold", color: "#104E5B" }}
                                            >
                                                {maxValue}
                                            </div>
                                        </div>
                                        <div className="price-input">
                                            <div className="field">
                                                <input
                                                    type="number"
                                                    className="input-min"
                                                    value={minValue}
                                                    min="10"
                                                    max="70"
                                                    onChange={(e) => handleInputChange(e, "min")}
                                                />
                                            </div>
                                            <div className="separator">-</div>
                                            <div className="field">
                                                <input
                                                    type="number"
                                                    className="input-max"
                                                    value={maxValue}
                                                    min="10"
                                                    max="70"
                                                    onChange={(e) => handleInputChange(e, "max")}
                                                />
                                            </div>
                                            <div className="year">Year</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div
                                className={`content-section ${currentIndex === 2 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Select teaching topics of interest</h1>
                                </div>

                                <div className="step-data">
                                    <div className="msg-text">Select at least three topics!</div>
                                    <input type="text" className="search-bar" placeholder="Search subject" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    <Form.Check
                                                         id="select-deselect-all"
                                                         label={selectAll ? "Deselect All" : "Select All"} // Toggle button text
                                                         checked={selectAll} // True when all topics are selected
                                                         onChange={handleChange}
                                                    />
                                                </ListGroup.Item>
                                                {filteredTopics.map((topic,index) => (
                                                    <ListGroup.Item key={index}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={topic.name}
                                                            label={topic.name}
                                                            checked={!!checkedItems[topic.name]} // Default to false if undefined
                                                            onChange={handleChange}
                                                        />
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Form>
                                    </ul>
                                </div>
                            </div>

                            <div
                                className={`content-section ${currentIndex === 3 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Content Maturity Restrictions</h1>
                                </div>

                                <div className="step-data">
                                    <input type="text" className="search-bar" placeholder="Search subject" value={maturity} onChange={(e)=>setMaturity(e.target.value)} />
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                {/* Select All Checkbox */}
                                                <ListGroup.Item>
                                                <Form.Check
                                                         id="select-deselect-all"
                                                         label={selectAll1 ? "Deselect All" : "Select All"} // Toggle button text
                                                         checked={selectAll1} // True when all topics are selected
                                                         onChange={handleCheckboxChange}
                                                    />
                                                </ListGroup.Item>

                                                {/* Individual Checkboxes */}
                                                {filterContentMaturity.map((item, index) => (
                                                    <ListGroup.Item key={index}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={item.name}
                                                            label={item.name}
                                                            checked={!!checkedItems1[item.name] }
                                                            onChange={handleCheckboxChange}
                                                        />
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Form>
                                    </ul>
                                </div>
                            </div>

                           

                            <div
                                className={`content-section ${currentIndex === 4 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Educational Objectives for Students</h1>
                                </div>
                                <div className="step-data mt-3">
                                    
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    <Form.Check
                                                         id="select-deselect-all"
                                                         label={selectAll3 ? "Deselect All" : "Select All"} // Toggle button text
                                                         checked={selectAll3} // True when all topics are selected
                                                         onChange={handleChangeeducation}
                                                    />
                                                </ListGroup.Item>
                                                {eduction && Array.isArray(eduction) && eduction.map((topic,index) => (
                                                    <ListGroup.Item key={index}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={topic.name}
                                                            label={topic.name}
                                                            checked={!!checkedItems3[topic.name]} // Default to false if undefined
                                                            onChange={handleChangeeducation}
                                                        />
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Form>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Section */}
                        <div className='bottom-btn-container'>
                            <div className="pagination-section pagination">
                                <ul className="">
                                    {/* <li>
                                    <button
                                        className={`step-btn step-first ${currentIndex === 0 ? "disabled" : ""
                                            }`}
                                        onClick={previousSlide}
                                    >
                                        <FaChevronLeft />
                                    </button>
                                </li> */}
                                    {images.map((_, index) => (
                                        <li key={index}>
                                            <button
                                                className={`dot ${index === currentIndex ? "active" : ""
                                                    }`}
                                                onClick={() => changeSlide(index)}
                                            >
                                                <span></span>
                                            </button>
                                        </li>
                                    ))}
                                    {/* <li>
                                    <button
                                        className={`step-btn step-last ${currentIndex === images.length - 1 ? "disabled" : ""
                                            }`}
                                        onClick={nextSlide}
                                    >
                                        <FaChevronRight />
                                    </button>
                                </li> */}
                                </ul>
                            </div>
                            <div className="step-button">
                                {
                                    currentIndex === images.length - 1 ? (
                                        <Link href="/successonboarding" className="btn-color-blue " onClick={()=>handleOnboarding(selectedval,sliderValues,item,selectedmaturity,slectedEducation)}>Finish</Link>
                                    ) : (
                                        <button type="button" className="btn-color-blue" onClick={nextSlide} disabled={currentIndex === 2 &&item.length<3}>Next</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachingStep;
