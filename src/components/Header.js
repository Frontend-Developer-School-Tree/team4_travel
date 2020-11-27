import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Header() {

    /* Definiamo una variabile che contiene i dati dell'API */
    const contesto = useContext(AppContext);

    
    return (
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
        
    )
}

export default Header
