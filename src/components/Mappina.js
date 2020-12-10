import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { MapContainer, Marker, TileLayer, } from 'react-leaflet'
import { arrayCity, arrayDate, arrayUnique } from '../funzioni';

function Mappina() {

  const contesto = useContext(AppContext);
  const rows = contesto.rows;
  const arrayLuoghi = arrayUnique(arrayCity(rows));
  const arrayGiorni = arrayDate(rows);
  const Pos_siracusa = contesto.rows[0].places[0].position.coords;
  const Pos_vendicari = contesto.rows[2].places[0].position.coords;
  const Pos_catania = contesto.rows[6].places[0].position.coords;

  console.log(Pos_siracusa);
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-xs-12">
          <div className="pt-1 shadow bg-light arrotonda-card" style={{ height: 'auto' }}>
            <MapContainer className="container_mappa" style={{ MaxWidth: '1260px', height: '400px' }} center={Pos_siracusa} zoom={8} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={Pos_siracusa}>
              </Marker>
              <Marker position={Pos_vendicari}>
              </Marker>
              <Marker position={Pos_catania}>
              </Marker>
            </MapContainer>
            <div className="info_mappa">
              <div className="titolo_mappa">{contesto.title}</div>
              <div className="titolo_percorso">
                {arrayLuoghi.map((citta, index) => {
                  return (<span key={citta}>{citta} {(index !== arrayLuoghi.length - 1) && '>'} </span>)
                })}
              </div>
              <div className="date_viaggio"><i class="fas fa-long-arrow-alt-right"></i>{`Dal ${arrayGiorni[0][0]} al ${arrayGiorni[arrayGiorni.length - 1][1]}`}</div>
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
