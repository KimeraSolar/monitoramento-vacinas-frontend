import { icon, LatLngExpression, point } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"; 
import { Container } from "./style";
import userMarker from '../../assets/user-marker.png';
import camaraMarker from '../../assets/chamber-marker.png';
import camaras from '../../mocks/camaras.json';

function CamaraMap() {
    const USER_POSITION: LatLngExpression = [-20.251722001753862, -40.26626320636542];

    const userIcon = icon({
        iconUrl: userMarker,
    });

    const camaraIcon = icon({
        iconUrl: camaraMarker,
    })

    return (
        <Container>
            <MapContainer center={USER_POSITION} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={USER_POSITION} icon={userIcon}>
                    <Popup offset={point(25, 0)}>Você está aqui</Popup>
                </Marker>
                {camaras.map(camara => (
                    <Marker 
                        position={camara.camaraLocation as LatLngExpression}
                        icon={camaraIcon}
                    >
                        <Popup offset={point(25, 0)}>Câmara {camara.camaraName}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Container>
    )
}

export default CamaraMap;