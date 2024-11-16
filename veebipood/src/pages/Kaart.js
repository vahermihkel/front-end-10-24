import React , {useState} from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from '../components/ChangeView';
 
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
 
function Kaart() {
    const [position, setPosition] = useState({center: [59.441, 24.817], zoom: 11})
 
 
    return (
        <div>
            <button onClick={() => setPosition({center: [59.437, 24.755], zoom: 11})}>Kõik Tallinna poed</button>
            <button onClick={() => setPosition({center: [59.427, 24.722], zoom: 13})}>Kristiine</button>
            <button onClick={() => setPosition({center: [59.421, 24.793], zoom: 13})}>Ülemiste</button>
            <button onClick={() => setPosition({center: [59.427, 24.629], zoom: 13})}>Haabersti</button>
            <button onClick={() => setPosition({center: [59.437, 24.755], zoom: 13})}>Viru keskus</button>
 
        <MapContainer style={{"height": "300px", "margin": "3%", "border-radius": "10px"}} center={position.center} zoom={position.zoom} scrollWheelZoom={false}>
          <ChangeView center={position.center} zoom={position.zoom}/>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[59.427, 24.629]}>
            <Popup>
              Haabersti pood. <br /> Avatud 9-21.
            </Popup>
          </Marker>
          <Marker position={[59.421, 24.793]}>
            <Popup>
              Ülemiste pood. <br /> Avatud 9-21.
              <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/Arvutitark+%C3%9Clemiste/@59.421727,24.7939396,17z/data=!3m1!4b1!4m6!3m5!1s0x4692eb5d644af281:0xc451cbdd7e880420!8m2!3d59.421727!4d24.7939396!16s%2Fg%2F11rn3tl9qf?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">
                Suur-Sõjamäe 4
              </a>
            </Popup>
          </Marker>
          <Marker position={[59.437, 24.755]}>
            <Popup>
              Viru keskus. <br /> Avatud 9-21.
            </Popup>
          </Marker>
          <Marker position={[59.427, 24.725]}>
            <Popup>
              Kristiine keskus. <br /> Avatud 9-22.
            </Popup>
          </Marker>
 
        </MapContainer>
        </div>
      )
    }
export default Kaart