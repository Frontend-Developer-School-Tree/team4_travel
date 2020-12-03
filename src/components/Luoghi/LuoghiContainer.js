import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { arrayCity, arrayDate, arrayBody, stampaData } from '../../funzioni';
import LuoghiAccordion from './LuoghiAccordion';

function LuoghiContainer() {

    const contesto = useContext(AppContext);
    const rows = contesto.rows;
    const arrCity = arrayCity(rows); 
    
    const arrDate = arrayDate(rows);
    const arrBody = arrayBody(rows);
  
    return (
        <div>
            {arrCity.map((city, index)=>{
                return (
                    <LuoghiAccordion 
                        city={city} 
                        date={stampaData(arrDate[index][0], arrDate[index][1])} 
                        key={index*151} 
                        rows={arrBody[index]}
                    />
                )
            })}
        </div>
    )
}

export default LuoghiContainer
