import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import { AppContext } from './context/AppContext';

function App() {
    
    const [data,setData] = useState('');
    const URL ='http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18';


    useEffect( ()=> {
        void (async () => {
            try {
                const res = await (await fetch(URL)).json()
                console.log(res)
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
