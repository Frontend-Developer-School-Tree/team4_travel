import React, { useState } from 'react'
import Timeline from '../Timeline'
import LuoghiBodyAccomodation from './LuoghiBodyAccomodation'
import LuoghiCar from './LuoghiCar'
import Modale from './Modale'

function LuoghiBody({ rows, car }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let day = 0;
    return (
        <div className="card-body" style={{borderTop:'1px solid lightgray'}}>
            {
            rows.map((row, index)=>{
                day++;
                let arrImg = [];
                return(
                    <div className='row'>
                        <Timeline day={day} car={car} index={index} className='col-1 sparisci'/>
                        <div className="col-xl-8 offset-xl-2"key={row.id}>
                            
                            <div className="container_citta">
                                <p>{row.places[0].name}</p>
                            </div>
                            <div className="blocco_uno p-2">
                                <div className="container_titolo p-2">
                                    <p className="card-text " style={{ color: '#FFB400', fontSize: '30px', lineHeight: '35px', fontWeight: '600' }}>
                                        {row.days[0].name}
                                        <span style={{ color: '#9BA7AF', fontSize: '26px', lineHeight: '30px', fontWeight: '400' }}>   {row.dayDate}</span>
                                    </p>
                                </div>
                                <div className="container_imageHotel p-2 d-flex">
                                    {row.days[0].images.map(img => {
                                        arrImg.push(img.image);
                                        return (
                                                <div className="col m-2" key={img.id} onClick={handleShow} style={{ cursor: 'pointer', width: '1100px', height: '300px', backgroundImage: `url(${img.image})`, backgroundSize: 'cover' }} />
                                        )
                                    })}<Modale image={arrImg} show={show} handleClose={handleClose} /></div>
                                <div className="container_descrizioneHotel p-2">
                                    <p style={{ fontSize: '14px', lineHeight: '16px' }}>{row.days[0].description}</p>
                                </div>
                            </div>

                            <div className="p-3" style={{ width: '1100px' }}>
                                {(index === 0 && car) && (<LuoghiCar />)}
                            </div>


                            <LuoghiBodyAccomodation accomodations={row.accomodations} />

                            <div className="row">
                                <div className="col-6 p-4">
                                    <div className="d-flex align-items-center justify-content-center" style={{ float:'left',backgroundColor: 'rgb(176, 238, 211)', width: '50px', height: '50px', borderRadius: '50px', cursor: 'pointer' }}>
                                        <i class="fas fa-check" style={{ fontSize: '26px', color: 'rgb(58, 190, 133)' }}></i>
                                    </div>
                                    <div className="m-3" style={{fontSize:'14px', lineHeight:'20px',float:'left'}}>{row.included}</div>
                                </div>

                                {(row.notIncluded)&& 
                                <div className="col-6 p-4">
                                    <div className="d-flex align-items-center justify-content-center" style={{ float:'left',backgroundColor: 'rgb(253, 209, 218)', width: '50px', height: '50px', borderRadius: '50px', cursor: 'pointer' }}>
                                        <i class="fas fa-times" style={{ fontSize: '26px', color: 'rgb(189, 98, 117)' }}></i>
                                       
                                    </div>
                                    <div className="m-3"  style={{fontSize:'14px', lineHeight:'20px',float:'left'}}>{row.notIncluded}</div>
                                </div>
                                }

                            </div>



                            <hr />
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default LuoghiBody;
