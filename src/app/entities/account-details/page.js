"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { MultiSelect } from "react-multi-select-component";
import Header from "../../../components/header/header";
import "./account.css";
import { Form } from "react-bootstrap";
import Image from "next/image";
import { MdOutlineCheckCircle } from "react-icons/md";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";


function AccountDetails({profileInfo,watchHistoryData,libraryVideo,teachingTopic,contentMaturity,eduction,handleEditProfile}) {

    const router = useRouter(); 
    const [isYearly, setIsYearly] = useState(false);

    const [selected, setSelected] = useState([]);
    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState(profileInfo?.phone || "");
    const [school, setSchool] = useState(profileInfo?.school || "");
    const [minAge, setMinAge] = useState(profileInfo?.onboarding?.ageFrom || "");
    const [maxAge, setMaxAge] = useState(profileInfo?.onboarding?.ageTo || "");
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        setPhoneNumber(profileInfo?.phone || "");
        setSchool(profileInfo?.school || "");
        setMinAge(profileInfo?.onboarding?.ageFrom || "");
        setMaxAge(profileInfo?.onboarding?.ageTo || "");
      }, [profileInfo?.phone, profileInfo?.school,profileInfo?.onboarding?.ageFrom, profileInfo?.onboarding?.ageTo]);
    console.log(phoneNumber,"phoneNumber++++++++++++")

    const togglePricing = () => {
        setIsYearly(!isYearly);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleEditClick = () => {
        if (isEditable) {
            console.log("is this fxn call")
            // Runs only when clicking "Save Changes"
            handleEditProfile( 
            selected.map(option => option.value),  // Extract values only
            selected1.map(option => option.value), 
            selected2.map(option => option.value), 
            phoneNumber, 
            school, 
            minAge, 
            maxAge);
        }
        setIsEditable(!isEditable);
    };

    const [options,setOptions]= useState([]);
    const [options1,setOptions1]= useState([]);
    const [options2,setOptions2]= useState([]);
     useEffect(()=>{
        if (teachingTopic && Array.isArray(teachingTopic)){
            const transformedOptions = teachingTopic.map(item=>({
                label: item.name,
                value: item.name
            }));
                setOptions(transformedOptions);
        }
        if (contentMaturity && Array.isArray(contentMaturity)){
            const transformedOptions1 = contentMaturity.map(item=>({
                label: item.name,
                value: item.name
            }));
                setOptions1(transformedOptions1);
        }
        if (eduction && Array.isArray(eduction)){
            const transformedOptions2 = eduction.map(item=>({
                label: item.name,
                value: item.name
            }));
                setOptions2(transformedOptions2);
        }
     },[teachingTopic,contentMaturity]);

     useEffect(() => {
       if (profileInfo?.onboarding){
        if (profileInfo?.onboarding?.teachingTopics) {
            const preSelected = profileInfo.onboarding.teachingTopics.map((topic) => ({
                label: topic,
                value: topic,
            }));
            setSelected(preSelected);
        }
        if (profileInfo?.onboarding?.contentMaturityRestrictions){
            const preSelected= profileInfo?.onboarding?.contentMaturityRestrictions.map((topic)=>({
                label: topic,
                value: topic,
            }))
            setSelected1(preSelected);
        }
        if (profileInfo?.onboarding?.educationalObjectives){
            const preSelected= profileInfo?.onboarding?.educationalObjectives.map((topic)=>({
                label: topic,
                value: topic,
            }))
            setSelected2(preSelected);
        }
       }
    }, [profileInfo]);

    const handleSelectChange = (selectedItems) => {
        setSelected(selectedItems);
    };
    const handleSelectChange1 = (selectedItems) => {
        setSelected1(selectedItems);
    };
    const handleSelectChange2 = (selectedItems) => {
        setSelected2(selectedItems);
    };
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove authentication token
        router.push("/login"); // Redirect to the login page
    };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Subscription Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div id="pricingSection" className="mt-4">
              <div className="container">
                {/* CHOOSE YOUR PLAN */}
                <div
                  id="js-pricing-switch"
                  className="text-center my-4 py-2 relative js-pricing-switch"
                >
                  <span className={`switch-label ${!isYearly ? "active" : ""}`}>
                    Yearly
                  </span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isYearly}
                      onChange={togglePricing}
                    />
                    <span className="slider-price"></span>
                  </label>
                  <span className={`switch-label ${isYearly ? "active" : ""}`}>
                    Monthly
                  </span>
                  <div className="save-money--mobile mt-3">
                    Save 10% on Yearly Plans
                  </div>
                </div>
                {/* CHOOSE YOU PLAN END */}

                <div className="row mx-n3 justify-content-center">
                  {/* PRICING CARD - Free Plan */}
                  <div className="col-6 mb-4">
                    <div className="card card-frame">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="card-header bg-transparent">
                            <div className="price-card--title">
                              <h4>Free Plan</h4>
                            </div>
                          </div>
                          <div className="card-body">
                            <ul className="list-unstyled list-md-space mb-0">
                              <li className="d-flex ">
                                <MdOutlineCheckCircle /> Feature 1
                              </li>
                              <li className="d-flex ">
                                <MdOutlineCheckCircle /> Feature 2
                              </li>
                              <li className="d-flex ">
                                <MdOutlineCheckCircle /> Feature 3
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="price-btn">
                            <button className="btn btn-color-orange-trans">
                              Current Plan
                            </button>
                          </div>
                          <div className="price">
                            <div className="price-number">Free</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PRICING CARD - Free Plan */}

                                    {/* PRICING CARD - Pro Plan */}
                                    <div className="col-6 mb-4">
                                        <div className="card card-frame active">
                                            <div className="row align-items-center">
                                                <div className="col-md-12">
                                                    <div className="card-header bg-transparent">
                                                        <div className="price-card--title">
                                                            <h4>Pro Plan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled list-md-space mb-0">
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 1
                                                            </li>
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 2
                                                            </li>
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 3
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className='price-btn'>
                                                        <button className='btn btn-color-orange' onClick={handleShow}>Upgrade</button>
                                                    </div>
                                                    <div className="price">
                                                        <div className="price-number">{isYearly ? '$12/month' : '$10/month'}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END PRICING CARD - Pro Plan */}
                                </div>
                            </div>
                        </div>
                        <div className='active-plan-info'>
                            Currently you have an active <b className='active-plan-name'>Free Plan </b>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <Modal show={show2} onHide={handleClose2} centered className='custom-modal success-modal'>
                <Modal.Header closeButton>
                    <h4>Are you sure you want to log out?</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon">
                            <Image src={require("../../../assets/images/logout.svg")} alt="Success" />
                        </div>
                        <div className="btn-container">
                            <button className="btn-color-orange" onClick={()=>{handleClose2(),handleLogout()}}>Yes, I want to log out</button>
                            <button className="btn-color-orange-transprent mt-4" onClick={handleClose2}>No, I want to stay logged in</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <Header />
            <main id="main" className="top-space">
                <div className="custom-container">
                    <div className="card-white">
                        <div className="card-inner-padding">
                            <div className="account-details">
                                <div className="account-user-info">
                                    <div className="account-user-avatar">
                                        <Image src={require("../../../assets/images/user.svg")} alt="User Avatar" width={100} height={100} />
                                    </div>
                                    <div>
                                        <div className="account-name">
                                            <h3>Examy Pella</h3>
                                        </div>
                                        <div className="account-user-name">
                                            <p>@exam_pel</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="account-user-bio">
                                    <Form className="question-select">
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput1">
                                            <div className="col-3">
                                                <Form.Label>Email address</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="email" placeholder="exam.p@gmail.com" defaultValue={profileInfo?.email|| ''}   />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput2">
                                            <div className="col-3">
                                                <Form.Label>Phone number</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="+1 (713) 892-5638"   value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} readOnly={!isEditable}/>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput3">
                                            <div className="col-3">
                                                <Form.Label>School Name</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="Enter school name" value={school}  onChange={(e) => setSchool(e.target.value)}readOnly={!isEditable}/>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput4">
                                            <div className="col-3">
                                                <Form.Label>Students age</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="12-18" value={`${minAge} - ${maxAge}`} onChange={(e) => { const [newMin, newMax] = e.target.value.split(" - ");setMinAge(newMin || ""); setMaxAge(newMax || ""); }} readOnly={!isEditable} />
                                            </div>
                                        </Form.Group>
                                      
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput6">
                                            <div className="col-3">
                                                <Form.Label>Teaching interests</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                {/* <Form.Control type="text"  defaultValue={profileInfo?.onboarding?.teachingTopics?.join(', ')||""} readOnly={!isEditable}/> */}
                                                {!isEditable ? (
                                                    // Display as text when not editable
                                                    <Form.Control
                                                        type="text"
                                                        defaultValue={selected.map((item) => item.label).join(", ")}
                                                        readOnly
                                                    />
                                                ) : (
                                                    // MultiSelect when editable
                                                    <MultiSelect
                                                        options={options}
                                                        value={selected}
                                                        onChange={handleSelectChange}
                                                        labelledBy="Select"
                                                        overrideStrings={{
                                                            selectSomeItems: "Select topics",
                                                            allItemsAreSelected: "",
                                                        }}
                                                        className="multi-select"
                                                        hasSelectAll={false} // Disable "Select All"
                                                        disableSearch={true} // Disable search box
                                                        valueRenderer={(selected) => 
                                                            selected.length ? selected.map(({ label }) => label).join(", ") : "Select topics"
                                                          }
                                                    />
                                                )}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput7">
                                            <div className="col-3">
                                                <Form.Label>Maturity restrictions</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                {/* <Form.Control type="text" defaultValue={profileInfo?.onboarding?.contentMaturityRestrictions?.join(', ')||""} readOnly={!isEditable} /> */}
                                                {!isEditable ?(
                                                     <Form.Control
                                                     type="text"
                                                     defaultValue={selected1.map((item) => item.label).join(", ")}
                                                     readOnly
                                                 />
                                                ) : (
                                                    <MultiSelect
                                                    options={options1}
                                                    value={selected1}
                                                    onChange={handleSelectChange1}
                                                    labelledBy="Select"
                                                    overrideStrings={{
                                                        selectSomeItems: "Select topics",
                                                    }}
                                                    className="multi-select"
                                                    hasSelectAll={false} // Disable "Select All"
                                                    disableSearch={true} // Disable search box
                                                    valueRenderer={(selected) => 
                                                        selected.length ? selected.map(({ label }) => label).join(", ") : "Select topics"
                                                      }
                                                />
                                               
                                                )}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput8">
                                            <div className="col-3">
                                                <Form.Label>Educational objectives</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                {/* <Form.Control type="text"  defaultValue={profileInfo?.onboarding?.educationalObjectives?.join(', ')|| ""} readOnly={!isEditable}/> */}
                                                {!isEditable ?(
                                                     <Form.Control
                                                     type="text"
                                                     defaultValue={selected2.map((item) => item.label).join(", ")}
                                                     readOnly
                                                 />
                                                ) : (
                                                    <MultiSelect
                                                    options={options2}
                                                    value={selected2}
                                                    onChange={handleSelectChange2}
                                                    labelledBy="Select"
                                                    overrideStrings={{
                                                        selectSomeItems: "Select topics",
                                                    }}
                                                    className="multi-select"
                                                    hasSelectAll={false} // Disable "Select All"
                                                    disableSearch={true} // Disable search box
                                                    valueRenderer={(selected) => 
                                                        selected.length ? selected.map(({ label }) => label).join(", ") : "Select topics"
                                                      }
                                                    
                                                />
                                               
                                                )}
                                            </div>
                                        </Form.Group>
                                      

                                        <div className="text-right" style={{ textAlign: "right" }}>
                                            <button className="btn btn-form-orange" onClick={handleEditClick} type='button'> {isEditable ? 'Save Changes' : 'Edit data'}</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-white">
                        <div className="card-inner-padding">
                            <div className="card-white-title">
                                <Image src={require("../../../assets/images/currency_exchange.svg")} alt="User Avatar" />
                                <h3>Subscription Plan</h3>
                            </div>
                            <div id="pricingSection" className="mt-4">
                                <div className="container">
                                    {/* CHOOSE YOUR PLAN */}
                                    <div id="js-pricing-switch" className="text-center my-4 py-2 relative js-pricing-switch">
                                        <span className={`switch-label ${!isYearly ? 'active' : ''}`}>Yearly</span>
                                        <label className="switch">
                                            <input type="checkbox" checked={isYearly} onChange={togglePricing} />
                                            <span className="slider-price"></span>
                                        </label>
                                        <span className={`switch-label ${isYearly ? 'active' : ''}`}>Monthly</span>
                                        <div className="save-money--mobile mt-3">Save 10% on Yearly Plans</div>
                                    </div>
                                    {/* CHOOSE YOU PLAN END */}

                                    <div className="row mx-n3 justify-content-center">
                                        {/* PRICING CARD - Free Plan */}
                                        <div className="col-4 px-2 mb-4">
                                            <div className="card card-frame">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <div className="card-header bg-transparent">
                                                            <div className="price-card--title">
                                                                <h4>Free Plan</h4>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className="list-unstyled list-md-space mb-0">
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 1
                                                                </li>
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 2
                                                                </li>
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 3
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className='price-btn'>
                                                            <button className='btn btn-color-orange-trans'>Current Plan</button>
                                                        </div>
                                                        <div className="price">
                                                            <div className="price-number">Free</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END PRICING CARD - Free Plan */}

                                        {/* PRICING CARD - Pro Plan */}
                                        <div className="col-4 px-2 mb-4">
                                            <div className="card card-frame active">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <div className="card-header bg-transparent">
                                                            <div className="price-card--title">
                                                                <h4>Pro Plan</h4>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className="list-unstyled list-md-space mb-0">
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 1
                                                                </li>
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 2
                                                                </li>
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 3
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className='price-btn'>
                                                            <button className='btn btn-color-orange' onClick={handleShow}>Upgrade</button>
                                                        </div>
                                                        <div className="price">
                                                            <div className="price-number">{isYearly ? '$12/month' : '$10/month'}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END PRICING CARD - Pro Plan */}
                                    </div>
                                </div>
                            </div>
                            <div className='active-plan-info'>
                                Currently you have an active <b className='active-plan-name'>Free Plan </b>
                            </div>
                        </div>
                    </div>
                    {libraryVideo?.length > 0 ?
                    <div className="card-white overflow-hidden">
                    <div className="card-inner-padding">
                        <div className='inline- d-flex align-items-center justify-content-between'>
                            <div className="card-white-title">
                                <Image src={require("../../../assets/images/save.svg")} alt="User Avatar" />
                                <h3>My Library</h3>
                            </div>
                            <Link href="/library" className='view-all-btn'>View all</Link>
                        </div>

                        <div className='library-list mt-4'>
                            <Swiper
                                spaceBetween={14}
                                slidesPerView={4}
                                className="mySwiper category-swiper library-swiper"
                            >
                                {libraryVideo && Array.isArray(libraryVideo) && libraryVideo.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="col-md-12">
                                            <div className="video-card">
                                                <div className="video-card-content">
                                                    <Link href="/videodetails">
                                                        <div className="video-card-image">
                                                            <Image src={item?.thumbnailUrl} alt="video card" width={300} height={150}/>
                                                            <div className="video-duration">{item?.duration}</div>
                                                        </div>
                                                    </Link>
                                                    <div className="video-card-detail">
                                                        <div className="video-de-title">
                                                            <div className="de-title">
                                                                <Link href="/videodetails">{item?.title}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                    :null}
                    
                    {watchHistoryData?.length > 0 ?
                    <div className="card-white overflow-hidden">
                    <div className="card-inner-padding">
                        <div className='inline- d-flex align-items-center justify-content-between'>
                            <div className="card-white-title">
                                <Image src={require("../../../assets/images/history.svg")} alt="User Avatar" />
                                <h3>Watch history</h3>
                            </div>
                            <Link href="/watchhistory" className='view-all-btn'>View all</Link>
                          </div>
                        </div>

                            <div className='library-list mt-4'>
                                <Swiper
                                    spaceBetween={14}
                                    slidesPerView={4}
                                    className="mySwiper category-swiper library-swiper"
                                >
                                    {watchHistoryData&&Array.isArray(watchHistoryData)&&watchHistoryData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="col-md-12">
                                                <div className="video-card">
                                                    <div className="video-card-content">
                                                        <Link href={`/mainHome/${item?._id}/videodetails2`}>
                                                            <div className="video-card-image">
                                                                <Image src={item?.thumbnail} alt="video card" width={300} height={150}/>
                                                                <div className="video-duration">{item?.duration}</div>
                                                            </div>
                                                        </Link>
                                                        <div className="video-card-detail">
                                                            <div className="video-de-title">
                                                                <div className="de-title">
                                                                    <Link href={`/mainHome/${item?._id}/videodetails2`}>{item?.title}</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                        </div>
                    </div>
                        : null}


                    <div className='log-out'>
                        <button className='btn-logout' onClick={handleShow2}><FiLogOut /> Logout</button>
                    </div>
                        
                    </div>

                
            </main>
        </>
    );
}

export default AccountDetails;