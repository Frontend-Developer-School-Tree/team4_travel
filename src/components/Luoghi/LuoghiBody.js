import React, { useState } from 'react'
import Timeline from '../Timeline'
import LuoghiBodyAccomodation from './LuoghiBodyAccomodation'
import LuoghiCar from './LuoghiCar'
import Modale from './Modale'

function LuoghiBody({rows, car}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="card-body p-4" style={{borderTop:'1px solid lightgray'}}>
            {rows.map((row, index)=>{
                return(
                    <div>
                        <Timeline />
                        
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
                                    {row.days[0].images.map(img=>{
                                        return(
                                            <div>
                                                <div className="col" key={img.id} onClick={handleShow} style={{cursor:'pointer', width: '1100px', height: '300px',backgroundImage: `url(${img.image})`,backgroundSize:'cover' }} />
                                                <Modale image={img.image} show={show} handleClose={handleClose} /> 
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="container_descrizioneHotel p-2">
                                    <p style={{fontSize:'14px', lineHeight:'16px'}}>{row.days[0].description}</p>
                                </div>
                            </div>
                        
                            {(index===0 && car) && (<LuoghiCar />)}
                            <p>Icona verde con spunta</p>
                            <LuoghiBodyAccomodation accomodations={row.accomodations}/>
                            <p>{row.included}</p>
                            <hr />
                        </div>
                           
                    </div>
                )
            })}
        </div>
    )
}

export default LuoghiBody;
