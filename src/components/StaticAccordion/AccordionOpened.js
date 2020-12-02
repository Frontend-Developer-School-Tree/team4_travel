import React from 'react'

function AccordionOpened({content}) {
    return (
        <div className="card-body" style={{borderTop:'1px solid lightgray'}}>
            <p className="card-text p-4" style={{fontSize:'17px', lineHeight:'20px'}}>{content}</p>
        </div>
    )
}

export default AccordionOpened
