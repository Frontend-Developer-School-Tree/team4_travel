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
                <div className="col-lg-12" style={{minWidth:'1300px'}}>
                    <div className="row shadow bg-light arrotonda-card">
                      <MapContainer className="container_mappa" center={Pos_siracusa} zoom={8} scrollWheelZoom={false}>
                        <TileLayer
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={Pos_siracusa}>
                          <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                          </Popup>
                        </Marker>
                        <Marker position={Pos_vendicari}>
                          <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                          </Popup>
                        </Marker>
                        <Marker position={Pos_catania}>
                          <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  </div>
                </div>
              </div>      
    )
  }

export default Mappina;
