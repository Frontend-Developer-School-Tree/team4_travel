import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import { AppContext } from './context/AppContext';

function App() {
    
    /* Settiamo uno stato iniziale 'data' pari a 'null', ci servirà per salvare all'interno i dati dell'Api */
    const [data,setData] = useState(null)
    const URL ='http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18';

    /* Con useEffect fetchiamo l'api e salviamo la risposta in 'data' */
    useEffect( ()=> {
        void (async () => {
            try {
                const res = await (await fetch(URL)).json()
                setData(res.results.data);
            } catch (err) {
                alert('Si è verificato un errore', err)
            }
        })()
    }, []
    )
   

    return (
        <div>
            <AppContext.Provider value={data}>
                <Header />                
            </AppContext.Provider>
        </div>
    )
}

export default App
