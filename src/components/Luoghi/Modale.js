import React from 'react'
import { Button, Modal } from 'react-bootstrap'


function Modale({ image, show, handleClose }) {

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <Modal className="d-flex align-items-center justify-content-center" show={show} onHide={() => handleClose()}>
                    <Modal.Header className="modal-header p-3" closeButton>
                        <Modal.Title></Modal.Title>
                        <hr className="p-1" style={{ color: 'lightgray' }} />
                    </Modal.Header>
                    <Modal.Body className="modal-body p-3">
                        <div className="col " style={{ cursor: 'pointer', width: '1000px', minHeight: '350px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: '50%' }} />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Modale
