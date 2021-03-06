// Funzione per ottenere array con Città per gruppo di giorni
//ES: array iniz [Catania, Catania, Catania, Siracusa, Siracusa, Palermo, Palermo, Catania]
// risultato [Catania, Siracusa, Palermo, Catania]

export function arrayCity(rows){
    const arrCity = []; 
    arrCity.push(rows[0].places[0].name);
    for (let i = 1; i < rows.length; i++) {
        (rows[i].places[0].name !== rows[i - 1].places[0].name) && arrCity.push(rows[i].places[0].name);
    }
    return arrCity;
}
// FUNZIONE PER STAMPARE MESE
function selezionaMese(n){
    let a;
    switch(n){
        case 1: a = 'GENNAIO'; break;
        case 2: a = 'FEBBRAIO'; break;
        case 3: a = 'MARZO'; break;
        case 4: a = 'APRILE'; break;
        case 5: a = 'MAGGIO'; break;
        case 6: a = 'GIUGNO'; break;
        case 7: a = 'LUGLIO'; break;
        case 8: a = 'AGOSTO'; break;
        case 9: a = 'SETTEMBRE'; break;
        case 10: a = 'OTTOBRE'; break;
        case 11: a = 'NOVEMBRE'; break;
        default: a = 'DICEMBRE'; break;
    }
    return a;
}
//FUNZIONE PER TRASFORMARE DATA API IN DATA DESIGN
export function stampaData(start, end){
    let dateStart = new Date (start);
    let dateEnd = new Date(end);
    let ds, de, ms, me, ys, ye, nms, nme;
    ds=dateStart.getDate(); de=dateEnd.getDate();
    ms = dateStart.getMonth() +1; me = dateEnd.getMonth() +1;
    ys = dateStart.getFullYear(); ye = dateEnd.getFullYear();
    nms=selezionaMese(ms); nme=selezionaMese(me);
    console.log(dateStart, dateEnd,ms,me, nms, nme)
    if(start===end) return `${ds} ${nms} ${ys}`;
    else if (ms !== me && ys===ye) return `${ds} ${nms} - ${de} ${nme} ${ys}`;
    else if (ys !== ye) return `${ds} ${nms} ${ys} - ${de} ${nms} ${ye}`;
    else if (ds!==de && ms===me && ys===ye) return `${ds} - ${de} ${nms} ${ye}`;
}
// FUNZIONE CHE RESTITUISCE DATA DI INIZIO E DATA DI FINE DI OGNI SOSTA
//Es. Siracausa 21/02 -Siracura 22/023 - Siracursa 23/03.
//Result [[21/02.,[23/02]]]
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
//Algoritmo per gestione corpo accordion
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
// Algoritmo per ottenere un array senza doppioni
export function arrayUnique(data){
    const uniqueArray = [... new Set(data)];
    return uniqueArray;
}