import React, { useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Form, ListGroup } from "react-bootstrap";
import Image from "next/image";
import ReactSlider from "react-slider";
import Link from "next/link";

const TeachingStep = ({ handleOnboarding, teachingTopic, contentMaturity, teachingLocation, eduction, handleNavigateHomeScreen, handleSkipData }) => {
    const images = [
        "",
        require("../../../assets/images/Artwork.svg"),
        require("../../../assets/images/step-3.svg"),
        // require("../../../assets/images/step-4.svg"),
        require("../../../assets/images/18+.svg"),
        require("../../../assets/images/stap-6.svg"),
    ];

    const [checkedItems1, setCheckedItems1] = useState({});
    const [selectAll, setSelectAll] = useState(false);
    const [selectAll1, setSelectAll1] = useState(false);
    const [selectAll3, setSelectAll3] = useState(false);
    const [checkedItems3, setCheckedItems3] = useState({});
    const [selected, setSelected] = useState("");

    const [selectedval, setSelectedval] = useState([])
// ;    console.log( selected,'selected----');
    const handleSelect = (label) => {
        setSelected(label);
        const arr =[label];
        setSelectedval(arr);
        // console.log( arr,'selected value---',);
    };
    // console.log(handleSelect,'handleSelect----');
    const [minValue, setMinValue] = useState(12);
    const [maxValue, setMaxValue] = useState(30);
    const [sliderValues, setSliderValues] = useState([])

    const handleSliderChange = ([min, max]) => {
        setMinValue(min);
        setMaxValue(max);
        const arr = [min, max]
        setSliderValues(arr);
        // console.log('min max array', arr);
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

    // const handleChange = (e) => {
    //     const { id, checked } = e.target;
    //     if (id === "deselect-all") {
    //         const newCheckedState = {};
    //         if (!checked) {
    //             Object.keys(checkedItems).forEach((key) => (newCheckedState[key] = false));
    //         }
    //         setCheckedItems(newCheckedState);
    //     } else {
    //         setCheckedItems({
    //             ...checkedItems,
    //             [id]: checked,
    //         });
    //     }
    // };
    const [item,setItems]=useState([]);
    const [selectedmaturity,setselectedMaturity] =useState([])
    const [slectedEducation,setSelectedEducation]=useState([])
    // console.log(slectedEducation,"selectedMaturity-----")

    useEffect(()=>{
        // console.log(item, 'my item is here')
    },[item,selectedmaturity,slectedEducation]);

    const handleChange = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all") {
            const newCheckedState = {};
            const newArr=filteredTopics.map((topic) => {newCheckedState[topic.name] = checked
                return topic.name
            }); // Select/Deselect all topics
            setItems((prevItems) => [...prevItems, ...newArr]);
            setCheckedItems(newCheckedState);
            setSelectAll(checked); // Update button behavior
        } else {
            setCheckedItems({
                ...checkedItems,
                [id]: checked,
            });
            if(checked){
                setItems((prevItems) => [...prevItems, id]);
            }
        }
    };

    // const topics = [
    //     { id: "alcohol", label: "Alcohol" },
    //     { id: "anxiety", label: "Anxiety" },
    //     { id: "addiction", label: "Addiction" },
    //     { id: "anger", label: "Anger" },
    //     { id: "bodyImage", label: "Body Image" },
    //     { id: "bullying", label: "Bullying" },
    //     { id: "cannabis", label: "Cannabis & Synthetic Cannabinoids" },
    //     { id: "cigarettes", label: "Cigarettes" },
    //     { id: "cyberbullying", label: "Cyberbullying" },
    //     { id: "decisionmaking", label: "Decision making" },
    //     { id: "depression", label: "Depression" },
    //     { id: "dopamine", label: "Dopamine" },
    //     { id: "eating", label: "Eating disorders" },
    //     { id: "E-cigarettes", label: "E-cigarettes" },
    // ];

   

    // const topicsSecond = [
    //     { id: "abuse", label: "Abuse" },
    //     { id: "death", label: "Death" },
    //     { id: "discussions", label: "Discussions or Depictions of Self-Harm" },
    //     { id: "disturbing", label: "Disturbing Images" },
    //     { id: "gore", label: "Gore" },
    //     { id: "sexual", label: "Sexual Imagery" },
    //     { id: "sexualLanguage", label: "Sexual Language/Explicit" },
    // ];

    // Handle individual checkbox changes
    // const handleCheckboxChange = (e) => {
    //     const { id, checked } = e.target;
    //     if (id === "select-all") {
    //         const newState = {};
    //         topics.forEach((topic) => {
    //             newState[topic.id] = checked;
    //         });
    //         setCheckedItems1(newState);
    //         setSelectAll(checked);
    //     } else {
    //         setCheckedItems1((prevState) => ({
    //             ...prevState,
    //             [id]: checked,
    //         }));
    //         setSelectAll(Object.values(checkedItems1).every((val) => val) && checked);
    //     }
    // };
   
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all") {
            const newCheckedState = {};
            const newArr=filterContentMaturity.map((item) => {newCheckedState[item.name] = checked
                return item.name
            }); // Select/Deselect all topics
            setselectedMaturity((prev)=>[...prev,...newArr])
            setCheckedItems1(newCheckedState);
            setSelectAll1(checked); // Update button behavior
        } else {
            setCheckedItems1({
                ...checkedItems1,
                [id]: checked,
            });
            if(checked){
                setselectedMaturity((prevItems)=>[...prevItems,id])
            }
        }
    };

//  console.log(slectedEducation,"slectedEducation----")
    const handleChangeeducation = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all") {
            const newCheckedState = {};
            const newArr=eduction.map((item) => {newCheckedState[item.name] = checked
                return item.name
            }); // Select/Deselect all topics
            setSelectedEducation((prev)=>[...prev,...newArr])
            setCheckedItems3(newCheckedState);
            setSelectAll3(checked); // Update button behavior
        } else {
            setCheckedItems3({
                ...checkedItems3,
                [id]: checked,
            });
            if(checked){
                setSelectedEducation((prevItems)=>[...prevItems,id])
            }
        }
    };

    const states = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
    ];

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

    // const checkboxes = [
    //     { id: 'deselect-all', label: 'Select all', isSelectAll: true },
    //     { id: 'abuse', label: 'Student Academic Success' },
    //     { id: 'death', label: 'Enhance Learning Environments' },
    //     { id: 'discussions', label: 'Student Social Success' },
    //     { id: 'disturbing', label: 'Student Relationship with Self' },
    //     { id: 'gore', label: 'Student Knowledge of High-Risk Behaviors' },
    //     { id: 'sexual', label: 'Student Manageability of Life' },
    // ];

    

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

    const [maturity, setMaturity] = useState('')
    const filterContentMaturity = contentMaturity.filter(item =>
        item.name.toLowerCase().includes(maturity.toLowerCase())
    );

    // const token = await localStorage.getItem('token');


    return (
        <div className="main-screen">
            <div className="row">
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
                    <div className="right-banner mt-150">
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
                                                            checked={checkedItems1[item.name] }
                                                            onChange={handleCheckboxChange}
                                                        />
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Form>
                                    </ul>
                                </div>
                            </div>

                            {/* <div
                                className={`content-section ${currentIndex === 4 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Where do you teach?</h1>
                                </div>

                                <div className="step-data">
                                    <input type="text" className="search-bar" placeholder="Search subject" />
                                    <ul className="checkbox-group">
                                        {states.map((state, index) => (
                                            <Form.Check
                                                key={state}
                                                type="radio"
                                                id={state.toLowerCase().replace(/\s+/g, "")}
                                                name="stateGroup"
                                                label={state}
                                                className="mb-2"
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div> */}

                            <div
                                className={`content-section ${currentIndex === 4 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Educational Objectives for Students</h1>
                                </div>
                                <div className="step-data mt-3">
                                    {/* <ul className="checkbox-group">
                                        {eduction && Array.isArray(eduction) && eduction.map((item, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    type="checkbox"
                                                    id={item.name}
                                                    label={item.name}
                                                    checked={selectedItems[item.name]}
                                                    onChange={item.isSelectAll ? handleSelectAllChange : handleCheckboxChange1}
                                                    disabled={item.isSelectAll && selectedItems['deselect-all']}
                                                />
                                            </li>
                                        ))}
                                    </ul> */}
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
                                        <button type="button" className="btn-color-blue" onClick={nextSlide}>Next</button>
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
