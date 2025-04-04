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
  console.log('Registeremail', Registeremail)
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal,setIsOpen,Registeremail }}>
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
          <input type="Registeremail" placeholder="Registeremail" className="modal-input"value={Registeremail} 
                onChange={(e) => setRegisteremail(e.target.value)} />
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
