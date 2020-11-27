import React from 'react'

function Accordion({title,content}) {
    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className="card bg-light mb-3 shadow">
                <div className="card-header p-2 font-weight-bold text-uppercase"><span className="align-middle" style={{color: "#0063C9"}}>{title}</span><i class="fas fa-angle-down float-right p-2"></i></div>
                <div className="card-body">
                <p className="card-text p-2">{content}</p>
            </div>
            </div>
        </div>
    )
}

export default Accordion
