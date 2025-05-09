"use client";

import React, { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { MultiSelect } from "react-multi-select-component";
import { IoSearchSharp } from "react-icons/io5";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";

function Sidebar() {
  const {
    historyList = [],
    setHeaderSearch,
    headerSearch,
    handleHistoryList,
    handleSearchCont,isOn, setIsOn,selectedAge, setSelectedAge,selectedEngagement, setSelectedEngagement,selectedDate, setSelectedDate,selectedAudience, setSelectedAudience,chips, setChips,inputValue, setInputValue,sliderValue, setSliderValue,selectedValue, setSelectedValue, selectedCategory ,handleGetCategories
  } = useHeader();

  // (headerSearch,"setHeaderSearch---")

  const [selected, setSelected] = useState([]);

  const [isSearchListPage, setIsSearchListPage] = useState(false);
  const [iscategoriesPage, setcategoriesPage] = useState(false);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get("query"); // Get the 'query' parameter from the URL
  
    if (category) {
      // Call the API with the category and other default values
      handleGetCategories(
        category,
        isOn,
        chips,
        inputValue,
        selectedAge,
        selectedEngagement,
        selectedDate,
        sliderValue,
        selectedValue,
        selectedAudience
      );
    }
  }, []);

  useEffect(() => {
    if (iscategoriesPage){
      handleGetCategories(
        selectedCategory,
        isOn,
        chips,
        inputValue,
        selectedAge,
        selectedEngagement,
        selectedDate,
        sliderValue,
        selectedValue,
        selectedAudience
      );
    }else{
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
      selectedAudience
    );
    // console.log(handleSearchCont,"calling from sidebar")
  }
  }, [
    // headerSearch,
    isOn,
    chips,
    selectedAge,
    selectedEngagement,
    selectedDate,
    sliderValue,
    selectedValue,
    selectedAudience,
  ]);

  const handleSelectedChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue((prevSelected) =>
      prevSelected === newValue ? "" : newValue
    );
  };
  const handleSliderChange = (value) => {
    const newValue = value[1];
    setSliderValue(newValue);
  };

  const addChip = () => {
    if (inputValue.trim() !== "") {
      const updatedChips = [...chips, inputValue];
      setChips(updatedChips);
      setInputValue("");
    }
  };

  const removeChip = (index) => {
    const updatedChips = chips.filter((_, i) => i !== index);
    setChips(updatedChips);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addChip();
    }
  };

  const handleRemove = (value) => {
    setSelected((prevSelected) =>
      prevSelected.filter((item) => item.value !== value)
    );
  };

  const handleClick = (age) => {
    if (selectedAge === age) {
      setSelectedAge(""); // Deselect if already selected
    } else {
      setSelectedAge(age); // Select the new age
    }
  };

  const handleClick1 = (engagement) => {
    if (selectedEngagement === engagement) {
      setSelectedEngagement("");
    } else {
      setSelectedEngagement(engagement);
    }
  };

  const handleClick2 = (date) => {
    if (selectedDate === date) {
      setSelectedDate("");
    } else {
      setSelectedDate(date);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick3 = (audience) => {
    if (selectedAudience === audience) {
      setSelectedAudience("");
    } else {
      setSelectedAudience(audience);
    }
  };

  useEffect(() => {
    setIsSearchListPage(window.location.pathname.includes("searchlist"));
  }, []);
  useEffect(() => {
    setcategoriesPage(window.location.pathname.includes("categorieslist"));
  }, []);

  return (
    <>
      {/* New folder Modal start */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal new-folder-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>New folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="input-container modal-input">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Folder name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn btn-color-orange" onClick={handleClose}>
              Create folder
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {!isSearchListPage && !iscategoriesPage && (
        <>
          <div className="add-folder">
            <button
              type="button"
              className="btn btn-new-folder"
              onClick={handleShow}
            >
              <MdAddCircleOutline /> New Folder
            </button>
          </div>
          <div className="dropdown-divider"></div>
        </>
      )}

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
                handleSearchCont(headerSearch, newValue);
              }}
            />
          </Form>
        </div>

        <div className="select-container">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Topic of the content</Form.Label>
            <div>
              {chips.length > 0 ? (
                <ul className="selected-list">
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
            <div className="search-container d-flex m-0">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={addChip}
              />
              <div className="search-button">
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
                  className={`list-group-item list-group-item-action ${
                    selectedAge === age ? "active" : ""
                  }`}
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
            <button
                className={`list-group-item list-group-item-action w-50 ${
                  selectedEngagement === "9" ? "active" : ""
                }`}
                id="list-profile-list"
                onClick={() => handleClick1("9")}
              >
                9+
              </button>
              <button
                className={`list-group-item list-group-item-action w-50 ${
                  selectedEngagement === "7" ? "active" : ""
                }`}
                id="list-messages-list"
                onClick={() => handleClick1("7")}
              >
                7+
              </button>
            </div>
          </div>
        </div>
        <div className="select-container">
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Date Published</Form.Label>
          </Form.Group>
          <div className="tab-select">
            <div className="list-group" id="list-tab" role="tablist">
              <button
                className={`list-group-item list-group-item-action w-100 ${
                  selectedDate === "newlyPublished" ? "active" : ""
                }`}
                id="list-settings-list"
                onClick={() => handleClick2("newlyPublished")}
              >
                Newly Published
              </button>
            </div>
          </div>
        </div>
        <div className="select-container">
          <Form.Group controlId="exampleForm.ControlInput5">
            <Form.Label>Difficulty Level</Form.Label>
            <Form.Control
              type="number"
              placeholder="Set difficulty"
              value={sliderValue !== null ? sliderValue.toString() : ""}
              readOnly
            />
          </Form.Group>
        </div>
        <div className="select-container">
          <div className="range-slider-container inline-gap-8">
            <div className="number-text">1</div>
            <RangeSlider
              className="single-thumb"
              min={0}
              max={10}
              step={1}
              defaultValue={[0, 1]}
              value={[0, sliderValue || 0]}
              thumbsDisabled={[true, false]}
              rangeSlideDisabled={true}
              onInput={handleSliderChange}
            />
            <div className="number-text">10</div>
          </div>
        </div>
        <div className="select-container check-sidebar">
          <Form.Group controlId="exampleForm.ControlInput6">
            <Form.Label>Duration</Form.Label>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  label="Under 5 Minutes"
                  name="group1"
                  type="checkbox"
                  id="inline-checkbox-1"
                  value="under-5"
                  checked={selectedValue === "under-5"}
                  onChange={handleSelectedChange}
                />

                <Form.Check
                  label="5-10 Minutes"
                  name="group1"
                  type="checkbox"
                  id="inline-checkbox-2"
                  value="5-10"
                  checked={selectedValue === "5-10"}
                  onChange={handleSelectedChange}
                />

                <Form.Check
                  label="10-15 Minutes"
                  name="group1"
                  type="checkbox"
                  id="inline-checkbox-3"
                  value="10-15"
                  checked={selectedValue === "10-15"}
                  onChange={handleSelectedChange}
                />

                <Form.Check
                  label="15+ Minutes"
                  name="group1"
                  type="checkbox"
                  id="inline-checkbox-4"
                  value="15"
                  checked={selectedValue === "15"}
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
                className={`list-group-item list-group-item-action ${
                  selectedAudience === "Student" ? "active" : ""
                }`}
                id="list-home-list"
                onClick={() => handleClick3("Student")}
              >
                Student
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAudience === "Parent" ? "active" : ""
                }`}
                id="list-messages-list"
                onClick={() => handleClick3("Parent")}
              >
                Parent
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAudience === "School Staff" ? "active" : ""
                }`}
                id="list-settings-list"
                onClick={() => handleClick3("School Staff")}
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
