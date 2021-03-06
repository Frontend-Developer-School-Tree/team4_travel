import React, { useState } from 'react'
import LuoghiBody from './LuoghiBody';

function LuoghiAccordion({ city, date, rows, car }) {

    const [isOpen, setIsOpen] = useState(false);
    const iconClass = `fas fa-angle-${(isOpen ? 'up' : 'down')} float-right p-2`;
    console.log(car);
    return (
        <div className='container-fluid mt-4'>
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-xs-12">
                    <div className="arrotonda-card card bg-light mb-3 shadow">
                        <div className="card-header p-3 text-uppercase">
                            <span className="align-middle p-3 font-weight-bold" style={{ color: "#5B5959", fontSize: '32px', lineHeight:'37px' }}>{city}</span>
                            <span className="align-middle p-1" style={{ color: "#9BA7AF", fontSize: '28px', lineHeight:'37px', fontWeight: '300px' }}>{date}</span>
                            <i className={iconClass} onClick={() => setIsOpen(!isOpen)} /></div>
                        <div className="card-body" style={{ maxWidth: '1300px' }}>
                            {(isOpen)
                                ?
                                <LuoghiBody rows={rows} car={car}/>
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