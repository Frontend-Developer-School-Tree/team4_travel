import React from 'react'

function AccordionOpened({content}) {
    return (
        <div className="card-body">
            <p className="card-text p-2">{content}</p>
        </div>
    )
}

export default AccordionOpened
