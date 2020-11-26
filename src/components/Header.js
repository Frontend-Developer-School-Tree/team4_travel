import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Header() {

    /* Definiamo una variabile che contiene i dati dell'API
    In un primo momento varrà 'null', a fetch avvenuta sarà il contenitore dei dati Api */
    const contesto = useContext(AppContext);

    /* In prima battuta 'contesto' avrà un valore di null, 
    successivamente 'contesto', a fetch conclusa, sarà in contenitore dei dati dell'Api.
    Con l'operatore ternario (contesto) ? [renderizzo cover] : [renderizzo spinner ] bypassiamo
    il problema dell'asincrono */ 
    return (
        (contesto) 
        ?
        <div className="container-fluid sfondo" style={{ backgroundImage: `url(${contesto.images[0].image})`}} >
            <div className="row">
                <div className="col">
                    <div>
                        <h2>
                        PER Nome Cognome, CIRCUITO COMPLETO DELLA SICILIA ALLA SCOPERTA DEI SAPORI
                        </h2>
                        <button className="btn btn-primary" type="button">
                            Scopri di più
                        </button>
                    </div>
                </div>
            </div>
        </div>
        :
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Header
