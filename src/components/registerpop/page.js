"use client";
import React, { createContext, useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Link from "next/link";
import "./pop.css"
// Modal Context Create Kiya
const ModalContext = createContext();

// Provider Component
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [Registeremail, setRegisteremail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setRegisteremail(email);
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal,setIsOpen,Registeremail,setRegisteremail }}>
      {children}
      <Modal
        show={isOpen}
        onHide={closeModal}
        centered
        className="custom-modal register-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Register to Gimmel for free</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Some features are available only to registered users. Register for
            free now to build a personal library and access several other
            features.
          </p>
          <div className="modal-text mb-3">
          <input type="Registeremail"  className="modal-input mb-0 "value={Registeremail} 
                 onChange={handleEmailChange} />
                 {emailError && <span className="error-message">{emailError}</span>}
                 </div>
          <Button className="btn-orange-header mb-3" onClick={closeModal}>
            <Link href="/signup" className="">Continue Registration</Link>
          </Button>
          <Button onClick={closeModal} className="btn-orange-outline">
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </ModalContext.Provider>
  );
};

// Custom Hook to use Modal Context
export const useModal = () => {
  return useContext(ModalContext);
};
