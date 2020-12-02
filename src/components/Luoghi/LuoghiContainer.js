import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import LuoghiAccordion from './LuoghiAccordion';

function LuoghiContainer() {

    const contesto = useContext(AppContext);
    const rows = contesto.rows;
    const arrCity = []; let scorriArrCity=0;
    if(rows.length ){
        arrCity.push(rows[0].places[0].name);
        for (let i=1 ; i<rows.length ; i++){
            (rows[i].places[0].name !== rows[i - 1].places[0].name) && arrCity.push(rows[i].places[0].name);
        }
    }
    return (
        <div>
            {arrCity.map((city, index)=>{
                return (
                    <LuoghiAccordion 
                        city={city} 
                        date={city} 
                        key={index*151} 
                    />
                )
            })}
        </div>
    )
}

export default LuoghiContainer
