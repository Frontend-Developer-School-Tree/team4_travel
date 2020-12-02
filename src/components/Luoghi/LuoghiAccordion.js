import React, { useState } from 'react'

function LuoghiAccordion({ city, date, content }) {

    const [isOpen, setIsOpen] = useState(false);
    const iconClass = `fas fa-angle-${(isOpen ? 'up' : 'down')} float-right p-2`;

    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className="row">
                <div className="col-lg-12" style={{ minWidth: '1300px' }}>
                    <div className="arrotonda-card card bg-light mb-3 shadow">
                        <div className="card-header p-2 font-weight-bold text-uppercase">
                            <span className="align-middle" style={{ color: "#0063C9" }}>{city}</span>
                            <span className="align-middle" style={{ color: "#0d0d0d" }}>{city}</span>
                            <i className={iconClass} onClick={() => setIsOpen(!isOpen)} /></div>
                        <div className="card-body" style={{ maxWidth: '1300px' }}>
                            {(isOpen)
                                ?
                                <div />
                                :
                                <div />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LuoghiAccordion;