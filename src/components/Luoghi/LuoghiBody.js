import React from 'react'
import LuoghiCar from './LuoghiCar'

function LuoghiBody({rows, car}) {
    return (
        <div className="card-body" style={{borderTop:'1px solid lightgray'}}>
            {rows.map((row, index)=>{
                return(
                    <div key={row.id}>
                        <p>{row.places[0].name}</p>
                        <p className="card-text p-4" style={{ fontSize: '17px', lineHeight: '20px' }}>{row.days[0].name}</p>
                        <p>{row.dayDate}</p>
                        <img src={row.days[0].images[0].image} alt='villa' style={{width: 200, height: 200}}/>
                        <p>{row.days[0].description}</p>
                        {(index===0 && car) && (<LuoghiCar />)}
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default LuoghiBody
