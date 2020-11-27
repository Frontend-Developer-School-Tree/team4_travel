import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import Accordion from './components/Accordion';
=======
import Footer from './components/Footer';
>>>>>>> a799f822ab20c6164be1d1e92ff50606fd586b5a
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
   
/* In prima battuta 'data' avrà un valore di null,
successivamente 'data', a fetch conclusa, sarà in contenitore dei dati dell'Api.
Con l'operatore ternario (data) ? [renderizzo App] : [renderizzo spinner ] bypassiamo
il problema dell'asincrono */
    return (
        (data)
        ?
        <div>
            <AppContext.Provider value={data}>
<<<<<<< HEAD
                <Header />
                                
=======
                <Header />   
                <Footer />             
>>>>>>> a799f822ab20c6164be1d1e92ff50606fd586b5a
            </AppContext.Provider>
        </div>
        :
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default App
