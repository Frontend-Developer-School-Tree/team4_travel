import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Header() {

    /* Definiamo una variabile che contiene i dati dell'API */
    const contesto = useContext(AppContext);

    
    return (
        /*<div className="container-fluid sfondo" style={{ backgroundImage: `url(${contesto.images[0].image})`}} >
            <div className="row">
                <div className="col" />
                <div className="col-10 d-flex justify-content-end text-right">
                        <div className="text-uppercase text-white align-bottom" style={{height:'100vh'}}>
                            <span className="font-italic h2 font-weight-bold">Team 4</span>
                            <h2 className="font-weight-bold mt-3">CIRCUITO COMPLETO DELLA SICILIA ALLA SCOPERTA DEI SAPORI</h2>
                            <button className="btn btn-primary p-2 text-uppercase mt-3" type="button">
                                Scopri di più
                            </button>
                        </div>                        
                </div>
                <div className="col" />
            </div>
        </div>*/
        <div className="container-fluid sfondo position-relative" style={{ backgroundImage: `url(${contesto.images[0].image})`, zIndex:'0'}} >
            <div className="row">
                <div className="col  justify-content-end text-right ">
                        <div className="text-uppercase text-white align-bottom position-absolute" style={{ zIndex:'2', right:'10vw', top:'74vh'}}>
                            <span className="font-italic h1 font-weight-bold">Team 4</span>
                            <h1 className="font-weight-bold mt-3">CIRCUITO COMPLETO DELLA SICILIA ALLA SCOPERTA DEI SAPORI</h1>
                            <button className="btn btn-primary p-2 text-uppercase mt-3" type="button">
                                Scopri di più
                            </button>
                        </div>                        
                </div>
            </div>
        </div>
    )
}

export default Header
