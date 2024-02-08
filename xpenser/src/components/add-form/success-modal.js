// This is the modal that pops up when, a expense is being successfully added

import React from "react";
import Modal from "react-modal";
import './success-modal.css';
import { Link } from "react-router-dom";

const SuccessModal = ({isModalOpen , setModal}) => {    // the success modal state is being de-structured here

    //from the documentation in npm package react-modal
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: "white",
          borderRadius: "12px",
        },
      };

    return (
        <>
            <Modal isOpen={isModalOpen} style={customStyles}>

                <div className="modal-outer">
                    <div className="modal-inner">
                        <label> Expense Added Successfully </label>
                        <img src={require('../../assets/success_icon.jpg')} alt="Expense Added Successfully" className="added-image" />
                    </div>
                    <Link to="/">                       {/* So this adds the functionality of when clicked on Add button it redirects to Home */}
                        <div className="take-home-button">
                            <i class="fi fi-rr-home"></i>
                            <label> Home </label>
                        </div>
                    </Link>
                </div>
                
            </Modal>
        </>
    );
}

export default SuccessModal;