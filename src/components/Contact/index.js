import React from 'react';

function Contact({ toggleModal, isModalOpen }) {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      toggleModal();
    }
  };
  if (isModalOpen) {
    return (
      <div className='modal-background' onClick={handleClick}>
        <div className='contact-modal'>
          <div>
            <h1 className='modal-contact-header'>Contact Me</h1>
            <span></span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
