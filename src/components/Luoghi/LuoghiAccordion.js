import React, { useState } from 'react'
import LuoghiBody from './LuoghiBody';

function LuoghiAccordion({ city, date, rows }) {

    const [isOpen, setIsOpen] = useState(false);
    const iconClass = `fas fa-angle-${(isOpen ? 'up' : 'down')} float-right p-2`;

    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className="row">
                <div className="col-lg-12" style={{ minWidth: '1300px' }}>
                    <div className="arrotonda-card card bg-light mb-3 shadow">
                        <div className="card-header p-3 text-uppercase">
                            <span className="align-middle p-3 font-weight-bold" style={{ color: "#5B5959", fontSize: '32px', lineHeight:'37px' }}>{city}</span>
                            <span className="align-middle p-1" style={{ color: "#9BA7AF", fontSize: '28px', lineHeight:'37px', fontWeight: '300px' }}>{date}</span>
                            <i className={iconClass} onClick={() => setIsOpen(!isOpen)} /></div>
                        <div className="card-body" style={{ maxWidth: '1300px' }}>
                            {(isOpen)
                                ?
                                <LuoghiBody rows={rows}/>
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