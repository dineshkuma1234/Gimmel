import React, { useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Form, ListGroup } from "react-bootstrap";
import Image from "next/image";
import ReactSlider from "react-slider";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LearningStep = ({interest,educationalObjective,handleOnboarding}) => {
    const images = [
        require("../../../assets/images/step-3.svg"),
        require("../../../assets/images/stap-6.svg"),
    ];

    const router = useRouter();
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
    // (currentIndex,"this is the current index")

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    
    const [checkedItems, setCheckedItems] = useState({});
    const [item,setItems]=useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const [checkedItems1, setCheckedItems1] = useState({});
    const [item1,setItem1]=useState([]);
    const [selectAll1, setSelectAll1] = useState(false);
    
    const [searchTerm, setSearchTerm] = useState('');
    const filteredTopics = (interest || []).filter(topic =>
        topic.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

   
    useEffect(() => {
        // (item1, 'my item is here')
    }, [item,item1])

    const handleChange = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all") {
            const newCheckedState = {};
            const newArr = filteredTopics.map((topic) => {
                newCheckedState[topic.name] = checked
                return topic.name
            }); // Select/Deselect all topics
            setItems(checked ? newArr : []);
            setCheckedItems(newCheckedState);
            setSelectAll(checked); // Update button behavior
        } else {
            setCheckedItems({
                ...checkedItems,
                [id]: checked,

            });
        
            if(checked){
                setItems((prevItems) => [...prevItems, id]);
            }else {
                return setItems((prevItems) =>prevItems.filter((item) => item !== id)); 
            }
        }
    };

    const handleChange1 = (e) => {
        const { id, checked } = e.target;

        if (id === "select-deselect-all1") {
            const newCheckedState = {};
            const newArr = educationalObjective.map((topic) => {
                newCheckedState[topic.name] = checked
                return topic.name
            }); // Select/Deselect all topics
            setItem1(checked ? newArr : []);
            setCheckedItems1(newCheckedState);
            setSelectAll1(checked); // Update button behavior
        } else {
            setCheckedItems1({
                ...checkedItems1,
                [id]: checked,

            });
        
            if(checked){
                setItem1((prevItems) => [...prevItems, id]);
            }else{
                return setItem1((prevItems)=>prevItems.filter((item)=> item !== id));
            }
        }
    };
 
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
                        <div className="right-side-content">
                            {/* Content Sections */}

                            <div
                                className={`content-section ${currentIndex === 0 ? "active" : ""
                                    }`}
                            >
                                <div className="page-title">
                                    <h1>Select topics of personal intrest</h1>
                                </div>

                                <div className="step-data">
                                    <div className="msg-text">Select at least three topics!</div>
                                    <input type="text" className="search-bar" placeholder="Search subject"  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    <Form.Check
                                                        
                                                        id="select-deselect-all"
                                                        label={selectAll ? "Deselect All" : "Select All"}
                                                        checked={selectAll} 
                                                        onChange={handleChange}
                                                    />
                                                </ListGroup.Item>
                                                {filteredTopics.map((topic,index) => (
                                                    <ListGroup.Item key={index}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={topic.name}
                                                            label={topic.name}
                                                            checked={!!checkedItems[topic.name]} 
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
                                    <h1>Educational Objectives</h1>
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
                                        <button  className="btn-color-blue " onClick={()=>{handleOnboarding(item,item1); router.push("/successonboarding")}} disabled={currentIndex===1 && item1.length===0}>Finish</button>
                                    ) : (
                                        <button type="button" className="btn-color-blue" onClick={nextSlide} disabled={currentIndex===0 && item.length<3}>Next</button>
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

export default LearningStep;
