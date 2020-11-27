import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    function stampa(e){
        e.preventDefault();
        window.print();
    }

    const contesto = useContext(AppContext);
    const agency = contesto.agency;
    return (
        <div>
            <footer className="page-footer font-small bg-primary text-white pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-9 mt-md-0 mt-3 pl-3">
                            <p>{agency.name} | Licenza n°( {agency.licenseNumber} )</p>
                            <br />
                            <p>{agency.contact.address}</p>
                            <br />
                            <img src={agency.image} alt={agency.name} width="132" height="45" />
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"></hr>
                        <div className="col-md-3 mt-md-0 mt-3">
                            <button className="btn btn-light p-md-2" onClick={(e)=>stampa(e)}>Scarica</button>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">
                    <p>© 2020 Copyleft: <strong>Team 4 - Francesca, Johanna, Fabio, Giuseppe</strong></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
