import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Header() {
    const contesto = useContext(AppContext);
    console.log(contesto);
    const imgSfondo= contesto.images[0].image;
    

    return (
        <div className="container-fluid sfondo" style={{backgroundImage: {imgSfondo}}} >
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
