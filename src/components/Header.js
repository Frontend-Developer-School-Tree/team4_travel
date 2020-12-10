import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


function Header() {

    /* Definiamo una variabile che contiene i dati dell'API */
    const contesto = useContext(AppContext);


    return (
        <div className="container-fluid sfondo position-relative" style={{ backgroundImage: `url(${contesto.images[0].image})`, zIndex: '0', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '0',}} >
            <div className="position-absolute overlay_image" style={{ zIndex: '1', height: '100%', width: '100%',}}>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <img className="m-5" src={contesto.agency.image} alt={contesto.agency.name} width="132" height="45" />
                        <div className="text-uppercase text-white position-absolute text-right pr-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{top: '60vh', zIndex: '2'}}>
                            <span className="font-italic h1 font-weight-bold">Team 4</span>
                            <h1 className="font-weight-bold mt-3">CIRCUITO COMPLETO DELLA SICILIA ALLA SCOPERTA DEI SAPORI</h1>
                            <button className="btn btn-primary p-2 text-uppercase mt-3" type="button">
                                Scopri di più
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
