import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Referenze() {

    const contesto = useContext(AppContext);

    return (
        <div className="d-flex justify-content-center mb-4 mt-4 ">
            <div className="row">
                <div className="col-lg-12 ">
                    <div className="row shadow bg-light">
                        <div className="col-3 p-2">
                            <img src={contesto.operator.image} alt={contesto.operator.name} style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className="col-5 p-4 border-right">
                            <div>{contesto.operator.name}</div>
                            <div>Il tuo agente di viaggio</div>
                            <div><i className="fa fa-phone" aria-hidden="true" /> {contesto.operator.contact.phone}</div>
                            <div><i className="fa fa-envelope" aria-hidden="true" /> {contesto.operator.contact.email}</div>
                            <div><i className="fas fa-home" /> {contesto.operator.contact.address}</div>
                        </div>
                        <div className="col-4 p-4">
                            <div>
                                <img src={contesto.agency.image} alt="logo" style={{ width: '132px', height: '45px' }} />
                            </div>
                            <div>
                                - Insolita Travels di InSicilia snc: Tour Operator Sicilia, DMC e Agenzia di Viaggi; <br/>
                                - Licenza Agenzia Viaggio nr. 2226/S2-TUR della Regione Siciliana; <br/>
                                - Polizza R.C. nr. 45130310-RC14 Europaische Reiserversicherung AG; <br/>
                                - InSicilia snc è iscritta all'Ufficio Registro Imprese di Catania N. REA 260386; <br/>
                                - Fondo Garanzia Viaggi: Certificato n. A/286.1059/1/R;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Referenze
