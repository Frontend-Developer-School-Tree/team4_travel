import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Header() {
    const contesto = useContext(AppContext);
    console.log(contesto.results);
   // const imgSfondo= contesto.results.data.images[0].image;
    

    return (
        <div className="container-fluid sfondo" >
            <div className="row">
                <div className="col">
                </div>
            </div>
        </div>
    )
}

export default Header
