import React from 'react'
import LuoghiCar from './LuoghiCar'

function LuoghiBody({rows, car}) {
    return (
        <div className="card-body p-4" style={{borderTop:'1px solid lightgray'}}>
            {rows.map((row, index)=>{
                return(
                    <div>
                        <div style={{width:'80px', height:'1000px', backgroundColor:'orange', float:'left'}}></div>

                        <div className="container_data" style={{float:'left', width:'1100px'}}key={row.id}>
                            <div className="container_citta">
                                <p>{row.places[0].name}</p>
                            </div>
                            <div className="blocco_uno p-2">
                                <div className="container_titolo p-2">
                                    <p className="card-text " style={{ color: '#FFB400', fontSize: '30px', lineHeight: '35px', fontWeight: '600' }}>
                                        {row.days[0].name}  
                                        <span  style={{ color: '#9BA7AF', fontSize: '26px', lineHeight: '30px', fontWeight: '400'}}>   {row.dayDate}</span>
                                    </p>
                                </div>
                                <div className="container_imageHotel p-2">
                                    <div style={{cursor:'pointer', width: '1100px', height: '300px',backgroundImage: `url(${row.days[0].images[0].image})`,backgroundSize:'cover' }}>
                                    </div>
                                </div>
                                <div className="container_descrizioneHotel p-2">
                                    <p style={{fontSize:'14px', lineHeight:'16px'}}>{row.days[0].description}</p>
                                </div>
                            </div>

                            
                            
                            {(index===0 && car) && (<LuoghiCar />)}
                            <hr />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LuoghiBody
