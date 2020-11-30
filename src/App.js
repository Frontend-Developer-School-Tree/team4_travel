import React, { useEffect, useState } from 'react'
import Accordion from './components/Accordion';
import AccordionContainer from './components/AccordionContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import Referenze from './components/Referenze';
import { AppContext } from './context/AppContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory 
} from "react-router-dom";
import Login from './components/Login';

function App() {

    /* Settiamo uno stato iniziale 'data' pari a 'null', ci servirà per salvare all'interno i dati dell'Api */
    const [data, setData] = useState(null)
    const URL = 'http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18';

    /* Con useEffect fetchiamo l'api e salviamo la risposta in 'data' */
    useEffect(() => {
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
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route exact path="/Home">
                            <AppContext.Provider value={data}>
                                <Header />
                                <Referenze />
                                <AccordionContainer />
                                <Footer />
                            </AppContext.Provider>
                        </Route>
                    </Switch>
                </Router>
            </div>
            :
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
    )
}

export default App
