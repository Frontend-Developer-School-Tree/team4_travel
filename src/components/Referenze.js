import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Referenze() {

    const contesto = useContext(AppContext);

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-xs-12">
                    <div className="shadow bg-light arrotonda-card d-flex">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 p-4 referenze">
                            <div style={{ width: '168px', height: '168px', backgroundImage: `url(${contesto.operator.image})`, backgroundSize: 'cover', }}>
                            </div>
                            <div className="ml-4">
                                <div style={{ fontSize: '21px', lineHeight: '30px' }}>{contesto.operator.name}</div>
                                <div style={{ fontSize: '18px', lineHeight: '30px' }}>Il tuo agente di viaggio</div>
                                <div style={{ fontSize: '18px', lineHeight: '30px' }}><i className="fa fa-phone" aria-hidden="true" /> <p style={{ textDecoration: 'underline', color: 'blue' }}> {contesto.operator.contact.phone}</p></div>
                                <div style={{ fontSize: '18px', lineHeight: '30px' }}><i className="fa fa-envelope" aria-hidden="true" /> <p style={{ textDecoration: 'underline', color: 'blue' }}> {contesto.operator.contact.email}</p></div>
                                <div style={{ fontSize: '18px', lineHeight: '30px' }}><i className="fas fa-home" /> {contesto.operator.contact.address}</div>
                            </div>
                        </div>
                        <div className=" border-left col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 p-4">
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
