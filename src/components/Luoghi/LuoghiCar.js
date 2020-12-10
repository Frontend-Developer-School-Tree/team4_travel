import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';


export default function LuoghiCar() {
    const contesto = useContext(AppContext)
    const transports = contesto.rows[0].transports[0];
    
    return (
        <div >
            <div className="car_section d-flex justify-content-start">
                <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgb(255, 180, 0)', width: '100px', height: '100px', cursor: 'pointer' }}>
                    <i class="fas fa-car" style={{ fontSize: '40px', color: 'rgb(202, 143, 1)' }}></i>
                </div>
                <div className="car_testo pl-4 px-4">
                    <p style={{ fontSize: '22px', fontWeight: '700', lineHeight: '25px' }}>{transports.name}</p>

                    <div className="d-flex justify-content-start mt-2">
                        <p className="small-text rob text-uppercase font-weight-bold pt-10">Luogo di ritiro </p>
                        <button class="btn_transports btn btn-outline  ml-4 " style={{ borderRadius: '50px' }}>{transports.pickup.name}</button>
                    </div>

                    <div className="d-flex justify-content-start mt-2">
                        <p className="small-text rob text-uppercase font-weight-bold pt-10">Luogo di ritiro </p>
                        <button class="btn_transports btn btn-outline  ml-4 " style={{ borderRadius: '50px' }}>{transports.return.name}</button>
                    </div>

                </div>
            </div>
        </div>

    )
}
