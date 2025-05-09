import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { MultiSelect } from "react-multi-select-component";
import { IoSearchSharp } from "react-icons/io5";
import { HeadManagerContext } from "next/dist/shared/lib/head-manager-context.shared-runtime";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";

function FilterData({
  handleSearchCont,
  headerSearch,
  setShow,
  setIsFilterApplied,
}) {
  const {
    isOn,
    setIsOn,
    selectedAge,
    setSelectedAge,
    selectedEngagement,
    setSelectedEngagement,
    selectedDate,
    setSelectedDate,
    selectedAudience,
    setSelectedAudience,
    chips,
    setChips,
    inputValue,
    setInputValue,
    sliderValue,
    setSliderValue,
    selectedValue,
    setSelectedValue,
  } = useHeader();

  const handleClick = (age) => {
    if (selectedAge === age) {
      setSelectedAge("");
    } else {
      setSelectedAge(age);
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

  const handleClick3 = (audience) => {
    if (selectedAudience === audience) {
      setSelectedAudience("");
    } else {
      setSelectedAudience(audience);
    }
  };
  const addChip = () => {
    if (inputValue.trim() !== "") {
      setChips([...chips, inputValue]);
      setInputValue("");
    }
  };
  const removeChip = (index) => {
    const newChips = chips.filter((_, i) => i !== index);
    setChips(newChips);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addChip();
    }
  };

  const handleSliderChange = (value) => {
    setSliderValue(value[1]);
  };

  const handleSelectedChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue((prevSelected) =>
      prevSelected === newValue ? "" : newValue
    );
  };

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
              onChange={(e) => {
                setIsOn(e.target.checked);
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
        <div className="dropdown-divider"></div>
        <div className="select-container">
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Minimum Age Requirement</Form.Label>
          </Form.Group>
          <div className="tab-select">
            <div className="list-group" id="list-tab" role="tablist">
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAge === "6-8" ? "active" : ""
                }`}
                id="list-home-list"
                onClick={() => handleClick("6-8")}
              >
                6-8
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAge === "8-10" ? "active" : ""
                }`}
                id="list-profile-list"
                onClick={() => handleClick("8-10")}
              >
                8-10
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAge === "10-13" ? "active" : ""
                }`}
                id="list-messages-list"
                onClick={() => handleClick("10-13")}
              >
                10-13
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAge === "13+" ? "active" : ""
                }`}
                id="list-settings-list"
                onClick={() => handleClick("13+")}
              >
                13+
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAge === "16+" ? "active" : ""
                }`}
                id="list-settings-list"
                onClick={() => handleClick("16+")}
              >
                16+
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAge === "18+" ? "active" : ""
                }`}
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
        <div className="dropdown-divider"></div>
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
        <div className="dropdown-divider"></div>
        <div className="select-container">
          <Form.Group controlId="exampleForm.ControlInput5">
            <Form.Label>Difficulty Level</Form.Label>
            <Form.Control
              type="text"
              placeholder="Set difficulty"
              value={sliderValue !== null ? sliderValue.toString() : ""}
              readOnly
            />
          </Form.Group>
        </div>
        <div className="select-container mt-4">
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
        <div className="dropdown-divider"></div>
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
        <div className="dropdown-divider"></div>
        <div className="select-container">
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Primary Audience</Form.Label>
          </Form.Group>
          <div className="tab-select">
            <div className="list-group btn-list-2" id="list-tab" role="tablist">
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAudience === "Students" ? "active" : ""
                }`}
                id="list-home-list"
                onClick={() => handleClick3("Students")}
              >
                Student
              </button>
              <button
                className={`list-group-item list-group-item-action ${
                  selectedAudience === "Parents" ? "active" : ""
                }`}
                id="list-messages-list"
                onClick={() => handleClick3("Parents")}
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

        <div className="hide_mobile">
          <button
            type="button"
            className="btn-color-orange" 
            onClick={() => {
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
              // console.log(handleSearchCont,"calling from the filter data " )
              setShow(false);
            }}
            disabled={!headerSearch}
          >
            Apply Filter
          </button>
        </div>

        <div className="show_mobile">
          <div className="bottom-bar-modal">
            <div className="bottom-btn-bar-inner">
              <button
                type="button"
                className=  "btn-color-orange"
                data-bs-dismiss="modal"
                onClick={() => {
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
                  // console.log(handleSearchCont,"calling from the filter data 1===== " )
                  setShow(false);
                }}
                disabled={!headerSearch}
              >
                Apply filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterData;
