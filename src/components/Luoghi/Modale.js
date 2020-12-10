import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'


function Modale({ image, show, handleClose }) {

    const [urlImg, setUrlImg]=useState((image) ? image[0] : '')

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <Modal className="d-flex align-items-center justify-content-center" show={show} onHide={() => handleClose()}>
                    <Modal.Header className="modal-header p-3" closeButton>
                        <Modal.Title></Modal.Title>
                        <hr className="p-1" style={{ color: 'lightgray' }} />
                    </Modal.Header>
                    <Modal.Body className="modal-body p-3">
                        <div className="col " style={image&&{ cursor: 'pointer', width: '1000px', minHeight: '350px', backgroundImage: `url(${urlImg})`, backgroundSize: 'cover', backgroundPosition: '50%' }} />
                    </Modal.Body>
                    <Modal.Footer className="modal-footer p-3">
                        {image&&image.map((img,index)=>{
                            return(
                                <div key={5001252*index} className="col " style={{ cursor: 'pointer', width: '1000px', minHeight: '350px', backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: '50%' }} onClick={()=>setUrlImg(img)}/>
                            )
                        })}
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Modale
