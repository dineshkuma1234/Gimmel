import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Form, ListGroup } from "react-bootstrap";
import Image from "next/image";
import ReactSlider from "react-slider";
import Link from "next/link";

const LearningStepMobile = ({interest,educationalObjective,handleOnboarding}) => {
    const images = [
        require("../../../assets/images/step-3.svg"),
        require("../../../assets/images/stap-6.svg"),
    ];

    const [selected, setSelected] = useState("School staff member");
    const handleSelect = (label) => {
        setSelected(label);
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
    const [item,setItems]=useState([]);
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all") {
            const newCheckedState = {};
            const newArr = filteredTopics.map((topic) => {
                newCheckedState[topic.name] = checked
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

    const topics = [
        { id: "alcohol", label: "Alcohol" },
        { id: "anxiety", label: "Anxiety" },
        { id: "addiction", label: "Addiction" },
        { id: "anger", label: "Anger" },
        { id: "bodyImage", label: "Body Image" },
        { id: "bullying", label: "Bullying" },
        { id: "cannabis", label: "Cannabis & Synthetic Cannabinoids" },
        { id: "cigarettes", label: "Cigarettes" },
        { id: "cyberbullying", label: "Cyberbullying" },
        { id: "decisionmaking", label: "Decision making" },
        { id: "depression", label: "Depression" },
        { id: "dopamine", label: "Dopamine" },
        { id: "eating", label: "Eating disorders" },
        { id: "E-cigarettes", label: "E-cigarettes" },
    ];

    const [checkedItems1, setCheckedItems1] = useState({});
    const [selectAll, setSelectAll] = useState(false);

    const topicsSecond = [
        { id: "abuse", label: "Abuse" },
        { id: "death", label: "Death" },
        { id: "discussions", label: "Discussions or Depictions of Self-Harm" },
        { id: "disturbing", label: "Disturbing Images" },
        { id: "gore", label: "Gore" },
        { id: "sexual", label: "Sexual Imagery" },
        { id: "sexualLanguage", label: "Sexual Language/Explicit" },
    ];

    // Handle individual checkbox changes
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        if (id === "select-all") {
            const newState = {};
            topics.forEach((topic) => {
                newState[topic.id] = checked;
            });
            setCheckedItems1(newState);
            setSelectAll(checked);
        } else {
            setCheckedItems1((prevState) => ({
                ...prevState,
                [id]: checked,
            }));
            setSelectAll(Object.values(checkedItems1).every((val) => val) && checked);
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

    const checkboxes = [
        { id: 'deselect-all', label: 'Select all', isSelectAll: true },
        { id: 'abuse', label: 'Student Academic Success' },
        { id: 'death', label: 'Enhance Learning Environments' },
        { id: 'discussions', label: 'Student Social Success' },
        { id: 'disturbing', label: 'Student Relationship with Self' },
        { id: 'gore', label: 'Student Knowledge of High-Risk Behaviors' },
        { id: 'sexual', label: 'Student Manageability of Life' },
    ];

    const [minValue, setMinValue] = useState(12);
    const [maxValue, setMaxValue] = useState(30);

    const handleSliderChange = ([min, max]) => {
        setMinValue(min);
        setMaxValue(max);
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
  
        const [item1,setItem1]=useState([]);
        const [selectAll1, setSelectAll1] = useState(false);
        console.log(checkedItems1,"this is checked1")
     const [searchTerm, setSearchTerm] = useState('');
        const filteredTopics = (interest || []).filter(topic =>
            topic.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

         useEffect(() => {
                console.log(item1, 'my item is here')
            }, [item,item1])
        
        const handleChange1 = (e) => {
            const { id, checked } = e.target;
    
            if (id === "select-deselect-all1") {
                const newCheckedState = {};
                const newArr = educationalObjective.map((topic) => {
                    newCheckedState[topic.name] = checked
                    return topic.name
                }); // Select/Deselect all topics
                setItem1((prevItems) => [...prevItems, ...newArr]);
                setCheckedItems1(newCheckedState);
                setSelectAll1(checked); // Update button behavior
            } else {
                setCheckedItems1({
                    ...checkedItems1,
                    [id]: checked,
    
                });
            
                if(checked){
                    setItem1((prevItems) => [...prevItems, id]);
                }
            }
        };

    return (

        <>
            <div className="page-container-mobile onboarding" style={{ height: "100%", background: "#fff", display: "flex", }}>
                <div className="page-main-section">
                    <div className="custom-container">
                        {/* Left Banner Section */}
                        <div className="left-banner remove-shadow">
                            <div className="left-banner-content">
                                <div className="banner-image">
                                    <Image id="slider-image" src={images[currentIndex]} alt="banner" />
                                </div>
                            </div>
                        </div>
                        {/* Right Banner Section */}
                        <div className="right-side-content">
                            {/* Content Sections */}

                            <div
                                className={`content-section ${currentIndex === 0 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Select topics of interest</h1>
                                </div>

                                <div className="step-data">
                                    <div className="msg-text">Select at least three topics!</div>
                                    <input type="text" className="search-bar" placeholder="Search subject" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
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
                                className={`content-section ${currentIndex === 1 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Educational Objectives </h1>
                                </div>
                                <div className="step-data mt-3">
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    <Form.Check
                                                        
                                                        id="select-deselect-all1"
                                                        label={selectAll1 ? "Deselect All" : "Select All"} // Toggle button text
                                                        checked={selectAll1} // True when all topics are selected
                                                        onChange={handleChange1}
                                                    />
                                                </ListGroup.Item>
                                                {educationalObjective && Array.isArray(educationalObjective) && educationalObjective.map((topic,index) => (
                                                    <ListGroup.Item key={index}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={topic.name}
                                                            label={topic.name}
                                                            checked={!!checkedItems1[topic.name]} // Default to false if undefined
                                                            onChange={handleChange1}
                                                        />
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Form>
                                    </ul>
                                </div>
                                <div className="step-button">
                                    <Link href="/successonboarding" className="btn-color-blue " onClick={()=>handleOnboarding(item,item1)}>Okay</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="pagination-section pagination">
                            <ul className="">
                                <li>
                                    <button
                                        className={`step-btn step-first ${currentIndex === 0 ? "disabled" : ""
                                            }`}
                                        onClick={previousSlide}
                                    >
                                        <FaChevronLeft />
                                    </button>
                                </li>
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
                                <li>
                                    <button
                                        className={`step-btn step-last ${currentIndex === images.length - 1 ? "disabled" : ""
                                            }`}
                                        onClick={nextSlide}
                                    >
                                        <FaChevronRight />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default LearningStepMobile;
