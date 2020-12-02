import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import LuoghiAccordion from './LuoghiAccordion';

function LuoghiContainer() {

    const contesto = useContext(AppContext);
    const rows = contesto.rows;
    const arrCity = []; 
    arrCity.push(rows[0].places[0].name);
    const arrDate = [[rows[0].dayDate, rows[0].dayDate]]
    let scorriArrDate = 0;
    for (let i=1 ; i<rows.length ; i++){
            (rows[i].places[0].name !== rows[i - 1].places[0].name) && arrCity.push(rows[i].places[0].name);
        }
    for (let i = 1; i < rows.length; i++) {
        if(rows[i].places[0].name === rows[i - 1].places[0].name){arrDate[scorriArrDate][1] = rows[i].dayDate}
        else { scorriArrDate++; arrDate.push([rows[i].dayDate, rows[i].dayDate])}
    }
    console.log(arrDate)
    function stampaData(start, end){
        return (start===end) ? `${start}` : `${start} ${end}`
    }
    
    return (
        <div>
            {arrCity.map((city, index)=>{
                return (
                    <LuoghiAccordion 
                        city={city} 
                        date={stampaData(arrDate[index][0], arrDate[index][1])} 
                        key={index*151} 
                    />
                )
            })}
        </div>
    )
}

export default LuoghiContainer
