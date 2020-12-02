import React, { useState } from 'react'
import AccordionOpened from './AccordionOpened'

function Accordion({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);
    const iconClass = `fas fa-angle-${(isOpen ? 'up' : 'down')} float-right p-2`;

    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className="row">
                <div className="col-lg-12" style={{minWidth:'1300px'}}>
                    <div className="arrotonda-card card bg-light mb-3 shadow">
                        <div className="card-header p-3 font-weight-bold text-uppercase">
                            <span className="align-middle p-3" style={{ color: "#0063C9", fontSize: '32px', lineHeight:'37px'}}>{title}</span>
                            <i className={iconClass} onClick={() => setIsOpen(!isOpen)} /></div>
                        <div className="card-body" style={{maxWidth:'1300px'}}>
                            {(isOpen)
                                ?
                                <AccordionOpened content={content}/>
                                :
                                <div />}
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Accordion
