import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

export default function LuoghiCar() {
    const contesto = useContext(AppContext)
    const transports = contesto.rows[0].transports[0];
    return (
        <div>
            <div>icona macchina</div>
            <p>{transports.name}</p>
            <p>Luogo di ritiro: </p>
            <p>{transports.pickup.name}</p>
            <p>Luogo di ritiro: </p>
            <p>{transports.return.name}</p>
        </div>
    )
}
