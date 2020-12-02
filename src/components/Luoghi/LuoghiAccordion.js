import React, { useState } from 'react'

function LuoghiAccordion({ city, date, content }) {

    const [isOpen, setIsOpen] = useState(false);
    const iconClass = `fas fa-angle-${(isOpen ? 'up' : 'down')} float-right p-2`;

    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className="card bg-light mb-3 shadow">
                <div className="card-header p-2 font-weight-bold text-uppercase">
                    <strong className="align-middle" style={{ color: "#0063C9" }}>{city}</strong>
                    <span className="align-middle" style={{ color: "#0d0d0d" }}>{date}</span>
                    <i className={iconClass} onClick={() => setIsOpen(!isOpen)} /></div>
                <div className="card-body">
                    {(isOpen)
                        ?
                        <div />
                        :
                        <div />}
                </div>
            </div>
        </div>
    )
}
export default LuoghiAccordion;