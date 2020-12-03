import React from 'react'
import LuoghiBodyAccomodation from './LuoghiBodyAccomodation'
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
                        {/* <img src={row.days[0].images[0].image} alt='villa' style={{width: 200, height: 200}}/> */}
                        {row.days[0].images.map(img=>{
                            return(
                                <img src={img.image} alt={img.image_name} key={img.id} style={{ width: 200, height: 200 }} />
                            )
                        })}
                        <p>{row.days[0].description}</p>
                        {(index===0 && car) && (<LuoghiCar />)}
                        <p>Icona verde con spunta</p>
                        <LuoghiBodyAccomodation accomodations={row.accomodations}/>
                        <p>{row.included}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default LuoghiBody
