import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { MapContainer, Marker, Popup, TileLayer,} from 'react-leaflet'

function Mappina() {
  
    const contesto = useContext(AppContext);
    /* const Pos_siracusa= [37.0633,15.2859]
    const Pos_vendicari= [36.8016,15.0914]
    const Pos_catania= [37.5016,15.0889] */

    const Pos_siracusa= contesto.rows[0].places[0].position.coords;
    const Pos_vendicari= contesto.rows[2].places[0].position.coords;
    const Pos_catania= contesto.rows[6].places[0].position.coords;
    
    console.log(Pos_siracusa);
    return(
      <div className="container-fluid mt-5 d-flex justify-content-center">
            <div className="row">
                <div className="col-lg-12" style={{minWidth:'1300px', maxWidth:'1300px'}}>
                    <div className="row shadow bg-light arrotonda-card" style={{height: '675px'}}>
                      <MapContainer className="container_mappa"  style={{ width: '1260px', height: '400px'}} center={Pos_siracusa} zoom={8} scrollWheelZoom={true}>
                        <TileLayer
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker  position={Pos_siracusa}>
                        </Marker>
                        <Marker  position={Pos_vendicari}>
                        </Marker>
                        <Marker position={Pos_catania}>
                        </Marker>
                      </MapContainer>
                      <div className="info_mappa">
                        <div className="titolo_mappa">{contesto.title}</div>
                        <div className="titolo_percorso">SIRACUSA > vendicari > Catania</div>
                        <div className="date_viaggio"><i class="fas fa-long-arrow-alt-right"></i>Dal 20/11/2020 al 26/11/2020</div>
                        <div className="date_viaggio"><i class="fas fa-long-arrow-alt-right"></i>2 adolescenti <i class="fas fa-long-arrow-alt-right"></i>2 adulti </div>
                        <div className="date_viaggio"><i class="fas fa-long-arrow-alt-right"></i>7 Giorni - 6 Notti</div>
                      </div>
                    </div>
                  </div>
             </div>
        </div>      
    )
  }

export default Mappina;
