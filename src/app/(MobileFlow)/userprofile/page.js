'use client'

import React from 'react';
import SliderThumbnil from '../../../assets/images/video-thumbnil.svg';
import "../../entities/account-details/account.css";
import Image from "next/image";
import BottomBar from "../../../components/BottomBar/BottomBar";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from 'next/link';
import { MdLogout } from "react-icons/md";
import { Form, Modal } from 'react-bootstrap';
import '../../CommenStyle/details.css';
import { MultiSelect } from "react-multi-select-component";
import { useEffect, useState } from 'react';
import { formatDuration } from '../../utils/monthsAgo/page';

function UserProfile({
    profileInfo,
    watchHistoryData,
    libraryVideo,
    teachingTopic,
    contentMaturity,
    eduction,
    handleEditProfile,
    handleImageUpdate,
    
}) {
    // (profileInfo, "profileInfo--today")

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selected, setSelected] = useState([]);
    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState(profileInfo?.phone || "");
    const [school, setSchool] = useState(profileInfo?.school || "");
    const [minAge, setMinAge] = useState(profileInfo?.onboarding?.ageFrom || "");
    const [maxAge, setMaxAge] = useState(profileInfo?.onboarding?.ageTo || "");
    useEffect(() => {
    setPhoneNumber(profileInfo?.phone || "");
    setSchool(profileInfo?.school || "");
    setMinAge(profileInfo?.onboarding?.ageFrom || "");
    setMaxAge(profileInfo?.onboarding?.ageTo || "");
    const initialValue = `${profileInfo?.onboarding?.ageFrom}-${profileInfo?.onboarding?.ageTo}`;
    setAge({ value: initialValue, error: "" });
    }, [profileInfo?.phone, profileInfo?.school,profileInfo?.onboarding?.ageFrom, profileInfo?.onboarding?.ageTo]);
    
    const [options,setOptions]= useState([]);
    const [options1,setOptions1]= useState([]);
    const [options2,setOptions2]= useState([]);
    const [age, setAge] = useState({ value: "", error: "" });

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

    const handleEditClick = () => {
        handleEditProfile( 

        selected.map(option => option.value),  // Extract values only
        selected1.map(option => option.value), 
        selected2.map(option => option.value), 
        phoneNumber, 
        school, 
        minAge, 
        maxAge);
    };
 
    const handleAgeChange = (text) => {

        const [min, max] = text?.split('-').map(value => value?.trim());

        setMinAge(min || '');
        setMaxAge(max || '');
        setAge({
            ...age,
            value: text,
            error: isNaN(min) || isNaN(max) ? 'Invalid age range' : '',
        });

    };

    return (
        <>
            {/* Details Modal  */}
            <Modal show={show} onHide={handleClose} centered className='details-modal'>
                <div className='modal-bar'>
                    <div className='bar-line'></div>
                </div>
                <div className="dropdown-divider"></div>
                <Modal.Body>
                    <div className="modal-body-container">
                        <Form className='question-select mb-105'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    defaultValue={profileInfo?.email || ""}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="+1 713 892 5638"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>School Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    // value={profileInfo?.school || ""}
                                    value={school}  
                                    onChange={(e) => setSchool(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Age range of your students</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="12-18"
                                    value={age.value}
                                    onChange={(e) => handleAgeChange(e.target.value)}
                                />
                                {age.error && <span style={{ color: 'red' }}>{age.error}</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>Teaching interests</Form.Label>
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

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>Content Maturity Restrictions</Form.Label>
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
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>Educational Objectives</Form.Label>
                                {/* <Form.Select aria-label="Default select example">
                                    <option>Student Academic Success</option>
                                    <option>Student Well-Being</option>
                                    <option>Student Engagement</option>
                                    <option>Student Learning</option>
                                </Form.Select> */}
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
                            </Form.Group>
                        </Form>
                        <div className="bottom-baar-modal">
                            <div className="bottom-btn-bar-inner">
                                <button type="button" className="btn-color-orange" data-bs-dismiss="modal" onClick={()=>{handleClose(); handleEditClick();}}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="page-top-bar">
                <div className="page-inner">
                    <div className="page-section-left">
                        <div className="page-title">
                            <h5>Account</h5>
                        </div>
                    </div>
                </div>
            </div>

            <main id="main" className="top-space account-details">
                <div className="custom-container">
                    <div className="account-details-inner">
                        <div className="account-user-info">
                            <div className="account-user-avatar">
                                <Image src={require("../../../assets/images/user.svg")} alt="User Avatar" />
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
                        <div className="user-edit-container">
                            <div className="user-edit">
                                <button className="user-edit-btn" onClick={handleShow}>Edit data</button>
                            </div>
                        </div>
                    </div>

                    <div className="account-full-info">
                        <div className="account-full-info-inner">
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Email Address</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>{profileInfo?.email || ""}</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Phone Number</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>{profileInfo?.phone || ""}</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>School Name</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>{school}</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Students age</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>{profileInfo?.onboarding?.ageFrom}-{profileInfo?.onboarding?.ageTo}</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Teaching interests</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>{profileInfo?.onboarding?.teachingTopics?.join(', ')||""}</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Maturity restrictions</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>{profileInfo?.onboarding?.contentMaturityRestrictions?.join(', ')||""}</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Educational objectives</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>{profileInfo?.onboarding?.educationalObjectives?.join(', ')|| ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className="account-plan-container">
                        <div className="account-plan">
                            <div className="plan-header">
                                <div className="plan-header-title">
                                    <Image src={require("../../../assets/images/currency_exchange.svg")} alt="User Avatar" />
                                    <h3>Subscription Plan</h3>
                                </div>
                                <div className="plan-header-edit">
                                    <button className="user-edit-btn">View all</button>
                                </div>
                            </div>
                            <div className="plan-body">
                                <div className="plan-btn">
                                    <button className="plan-select-btn active">Yearly</button>
                                    <button className="plan-select-btn">Monthly</button>
                                </div>

                                <div className="row mx-n3">

                                    {/* Pro Plan Pricing Card */}
                                    <div className="col-sm-12 col-xl-12 mb-3">
                                        <div className="card card-frame active">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <div className="card-header bg-transparent">
                                                        <div className="price-card--title">
                                                            <h4>Pro Plan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled list-md-space mb-0">
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 1
                                                            </li>
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 2
                                                            </li>
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 3
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="price">
                                                        <div className="price-number">$10/ month</div>
                                                        <del className="small-text">$12/month</del>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn-color-orange mt-2">Upgrade</button>
                                        </div>
                                    </div>
                                    {/* Free Plan Pricing Card */}
                                    <div className="col-sm-12 col-xl-12 mb-3">
                                        <div className="card card-frame">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <div className="card-header bg-transparent">
                                                        <div className="price-card--title">
                                                            <h4>Free Plan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled list-md-space mb-0">
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 1
                                                            </li>
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 2
                                                            </li>
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 3
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="price">
                                                        <div className="price-number">Free</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="active-plan-info">Currently you have an active <b className="active-plan-name">Free Plan </b></div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    {libraryVideo?.length > 0 ? (
                        <div className="sec-account">
                            <div className='inline- d-flex align-items-center justify-content-between'>
                                <div className="card-white-title">
                                    <Image src={require("../../../assets/images/save.svg")} alt="User Avatar" />
                                    <h3>My Library</h3>
                                </div>
                                <Link href={{ pathname: "/savematerial", query:{from:"saveMaterial"} }}className='view-all-btn'>View all</Link>
                            </div>

                            <div className='library-list mt-4'>
                                <div className='list-item'>
                                    {libraryVideo&&
                                    Array.isArray(libraryVideo)&&
                                    libraryVideo.map((item, index) => (
                                        <div className="video-card-container" key={index}>
                                            <div className="video-card-content">
                                                <Link href={`/mainHome/${item?._id}/videodetails2`}>
                                                    <div className="video-card-image">
                                                        <Image src={item?.thumbnailUrl} alt="video card" width={300} height={150} />
                                                        <div className="video-duration">
                                                            {formatDuration(item?.duration)}
                                                        </div>
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
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : null}

                    <div className="dropdown-divider"></div>

                    {watchHistoryData?.length > 0 ? (
                        <div className="sec-account">
                            <div className='inline- d-flex align-items-center justify-content-between'>
                                <div className="card-white-title">
                                    <Image src={require("../../../assets/images/history.svg")} alt="User Avatar" />
                                    <h3>Watch history</h3>
                                </div>
                                <Link href="/watchhistory" className='view-all-btn'>View all</Link>
                            </div>

                            <div className='library-list mt-4'>
                                <div className='list-item'>
                                    {watchHistoryData && 
                                    Array.isArray(watchHistoryData)&&
                                    watchHistoryData.map((item, index) => (
                                        <div className="video-card-container" key={index}>
                                            <div className="video-card-content">
                                                <Link href={`/mainHome/${item?._id}/videodetails2`}>
                                                    <div className="video-card-image">
                                                        <Image src={item?.thumbnail} alt="video card" width={300} height={150} />
                                                        <div className="video-duration">
                                                        {formatDuration(item?.duration)}
                                                        </div>
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
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : null}

                    <div className="dropdown-divider"></div>

                    <div className='logout-btn pb-3'>
                        <Link href="/logoutconfirmation" className="btn-logout "><MdLogout />Logout</Link>
                    </div>
                </div>
            </main>

            <BottomBar />
        </>
    );
}

export default UserProfile;