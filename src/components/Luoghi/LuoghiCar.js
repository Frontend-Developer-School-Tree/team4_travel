import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

export default function LuoghiCar() {
    const contesto = useContext(AppContext)
    const transports = contesto.rows[0].transports[0];
    return (
        <div className="car_section">
            <div className="car_icona" style={{backgroundColor:'rgb(255, 180, 0)', width:'100px', height:'100px'}}>
                <i class="fas fa-car"></i>
            </div>
            <div className="car_testo pl-4 px-4">
                <p>{transports.name}</p>
                <p>Luogo di ritiro: </p>
                <p>{transports.pickup.name}</p>
                <p>Luogo di ritiro: </p>
                <p>{transports.return.name}</p> 
            </div>
            
        </div>
    )
}
