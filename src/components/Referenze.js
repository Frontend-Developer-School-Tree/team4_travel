import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Referenze() {

    const contesto = useContext(AppContext);

    return (
        <div className="container-fluid mt-5 d-flex justify-content-center">
            <div className="row">
                <div className="col-lg-12" style={{minWidth:'1300px'}}>
                    <div className="row shadow bg-light arrotonda-card">
                        <div className="col-2 p-4">
                            <div style={{width: '168px', height: '168px',backgroundImage: `url(${contesto.operator.image})`,backgroundSize:'cover', }}>
                            </div>
                        </div>
                        <div className="col-4 p-1 border-right pt-4">
                            <div style={{fontSize:'21px',lineHeight:'30px'}}>{contesto.operator.name}</div>
                            <div style={{fontSize:'18px',lineHeight:'30px'}}>Il tuo agente di viaggio</div>
                            <div style={{fontSize:'18px',lineHeight:'30px'}}><i className="fa fa-phone" aria-hidden="true" /> <a href="#"> {contesto.operator.contact.phone}</a></div>
                            <div style={{fontSize:'18px',lineHeight:'30px'}}><i className="fa fa-envelope" aria-hidden="true" /> <a href="#"> {contesto.operator.contact.email}</a></div>
                            <div style={{fontSize:'18px',lineHeight:'30px'}}><i className="fas fa-home" /> {contesto.operator.contact.address}</div>
                        </div>
                        <div className="col-6 p-4">
                            <div>
                                <img src={contesto.agency.image} alt="logo" style={{ width: '132px', height: '45px' }} />
                            </div>
                            <div>
                                - Insolita Travels di InSicilia snc: Tour Operator Sicilia, DMC e Agenzia di Viaggi; <br />
                                - Licenza Agenzia Viaggio nr. 2226/S2-TUR della Regione Siciliana; <br />
                                - Polizza R.C. nr. 45130310-RC14 Europaische Reiserversicherung AG; <br />
                                - InSicilia snc è iscritta all'Ufficio Registro Imprese di Catania N. REA 260386; <br />
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
