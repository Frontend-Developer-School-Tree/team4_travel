import React  from 'react'
import { MapContainer, Marker, Popup, TileLayer,} from 'react-leaflet'

function Mappina() {
    const Pos_siracusa= [37.0633,15.2859]
    const Pos_vendicari= [36.8016,15.0914]
    const Pos_catania= [37.5016,15.0889]
            
    return(
      <div className="card">
        <MapContainer center={Pos_siracusa} zoom={13} scrollWheelZoom={false}>
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
      
    )
  }

export default Mappina;
