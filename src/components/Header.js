import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Header() {

    const contesto = useContext(AppContext);
     
    const urlImg = (contesto) ? `url(${contesto.images[0].image})` : null;

    return (
        (contesto) ?
        <div className="container-fluid sfondo" style={{ backgroundImage: urlImg}} >
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
        <div />
    )
}

export default Header
