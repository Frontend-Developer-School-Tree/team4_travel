import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Header() {

    /* Definiamo una variabile che contiene i dati dell'API */
    const contesto = useContext(AppContext);

    
    return (
        <div className="container-fluid sfondo position-relative" style={{ backgroundImage: `url(${contesto.images[0].image})`, zIndex:'0'}} >
            <div className="position-absolute overlay_image" style={{zIndex:'1', height:'100%', width:'100%'}}></div>
            <div className="row">
                <img className="m-5" src={contesto.agency.image} alt={contesto.agency.name} width="132" height="45" />
                <div className="col-sm col-md col-lg col-xl justify-content-end text-right">
                        <div className="text-uppercase text-white align-bottom position-absolute col-sm col-md col-lg col-xl" style={{ zIndex:'2', right:'10vw', top:'64vh'}}>
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
