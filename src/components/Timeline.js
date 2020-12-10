import React from 'react'

function Timeline({ day, car, index }) {
    console.log(car);
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='Dot Big mb-1 mt-1 d-flex align-items-center justify-content-center'>
                DAY {day}
            </div>
            <div className='Dot Medium Medium2 d-flex align-items-center justify-content-center mb-1'>
                <i class="fa fa-map-marker"></i>
            </div>
            {(car && !index) ?
                <div className='Dot Medium d-flex align-items-center justify-content-center mb-1'>
                    <i class="fa fa-car"></i>
                </div> : <div/>
            }
            <div className='dotBg' />
        </div>
    )
}

export default Timeline
