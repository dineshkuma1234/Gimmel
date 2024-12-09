import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Form, ListGroup } from "react-bootstrap";
import Image from "next/image";
import ReactSlider from "react-slider";
import Link from "next/link";

const TeachingStep = () => {
    const images = [
        require("../../../assets/images/pixel.svg"),
        require("../../../assets/images/Artwork.svg"),
        require("../../../assets/images/step-3.svg"),
        // require("../../../assets/images/step-4.svg"),
        require("../../../assets/images/step-5.svg"),
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

    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (e) => {
        const { id, checked } = e.target;
        if (id === "deselect-all") {
            const newCheckedState = {};
            if (!checked) {
                Object.keys(checkedItems).forEach((key) => (newCheckedState[key] = false));
            }
            setCheckedItems(newCheckedState);
        } else {
            setCheckedItems({
                ...checkedItems,
                [id]: checked,
            });
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
                        <div className="right-side-content">
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
                                    <input type="text" className="search-bar" placeholder="Search subject" />
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    <Form.Check
                                                        type="checkbox"
                                                        id="deselect-all"
                                                        label="Deselect all"
                                                        checked={Object.values(checkedItems).every((val) => !val)} // True if all items are unchecked
                                                        onChange={handleChange}
                                                    />
                                                </ListGroup.Item>
                                                {topics.map((topic) => (
                                                    <ListGroup.Item key={topic.id}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={topic.id}
                                                            label={topic.label}
                                                            checked={!!checkedItems[topic.id]} // Default to false if undefined
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
                                    <input type="text" className="search-bar" placeholder="Search subject" />
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                {/* Select All Checkbox */}
                                                <ListGroup.Item>
                                                    <Form.Check
                                                        type="checkbox"
                                                        id="select-all"
                                                        label="Select all"
                                                        checked={selectAll}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                </ListGroup.Item>

                                                {/* Individual Checkboxes */}
                                                {topicsSecond.map((topic) => (
                                                    <ListGroup.Item key={topic.id}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={topic.id}
                                                            label={topic.label}
                                                            checked={checkedItems1[topic.id] || false}
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
                                    <ul className="checkbox-group">
                                        {checkboxes.map((checkbox) => (
                                            <li key={checkbox.id}>
                                                <Form.Check
                                                    type="checkbox"
                                                    id={checkbox.id}
                                                    label={checkbox.label}
                                                    checked={selectedItems[checkbox.id]}
                                                    onChange={checkbox.isSelectAll ? handleSelectAllChange : handleCheckboxChange1}
                                                    disabled={checkbox.isSelectAll && selectedItems['deselect-all']}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="step-button">
                                    <Link href="/successonboarding" className="btn-color-blue ">Okay</Link>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Section */}
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
                        <div className="skip-btn">
                            <Link href="price.html" className="btn-text">Skip</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachingStep;
