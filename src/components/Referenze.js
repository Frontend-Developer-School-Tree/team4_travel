import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Referenze() {

    const contesto = useContext(AppContext);

    return (
                <div className="d-flex justify-content-center mb-4 mt-4 ">
                    <div className="row">
                    <div className="col-lg-12 ">
                        <div className="row shadow bg-light">
                            <div className="col-2 p-3">
                                <img src={contesto.operator.image} alt={contesto.operator.name}/>
                            </div>
                            <div className="col-5 p-3">
                                testo lunghissimo che serve a occupare un sacco di spazio
                            </div>
                            <div className="col-5 p-3">
                                testo lunghissimo che serve a occupare un sacco di spazio
                            </div>
                        </div>
                    </div>
                </div>
                </div>           
    )
}

export default Referenze
