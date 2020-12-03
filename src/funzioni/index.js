import React from 'react'

export function arrayCity(rows){
    const arrCity = []; 
    arrCity.push(rows[0].places[0].name);
    for (let i = 1; i < rows.length; i++) {
        (rows[i].places[0].name !== rows[i - 1].places[0].name) && arrCity.push(rows[i].places[0].name);
    }
    return arrCity;
}

export function stampaData(start, end){
    return (start===end) ? `${start}` : `${start} ${end}`
}

export function arrayDate (rows){
    const arrDate = [[rows[0].dayDate, rows[0].dayDate]]
    let scorri = 0;

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].places[0].name === rows[i - 1].places[0].name) {
            arrDate[scorri][1] = rows[i].dayDate;
        }
        else {
            scorri++;
            arrDate.push([rows[i].dayDate, rows[i].dayDate]);
        }
    }
    return arrDate;
}

export function arrayBody(rows) {
    let scorri = 0;
    const arrBody = [[rows[0]]];

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].places[0].name === rows[i - 1].places[0].name) {
            arrBody[scorri].push(rows[i]);
        }
        else {
            scorri++;
            arrBody[scorri] = [];
            arrBody[scorri].push(rows[i]);
        }
    }
    return arrBody;
}
export function arrayUnique(data){
    const uniqueArray = [... new Set(data)];
    return uniqueArray;
}