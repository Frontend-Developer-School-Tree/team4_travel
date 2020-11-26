import React, { useEffect, useState } from 'react'
import { AppContext } from './context/AppContext';

function App() {
    
    const [data,setData] = useState('');
    const URL ='http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18';


    useEffect( ()=> {
        void (async () => {
            try {
                const res = await (await fetch(URL)).json()
                console.log(res)
                setData(res);
            } catch (err) {
                alert('Si è verificato un errore', err)
            }
        })()
    }, []
    )

    return (
        <div>
            <AppContext.Provider value={data}>
            <h1>Team 4</h1>
            </AppContext.Provider>
        </div>
    )
}

export default App
