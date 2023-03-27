import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"; 
import { Container } from "./style";

function CamaraMap() {
    const USER_POSITION: LatLngExpression = [-20.264041794374332, -40.26488991534286];

    return (
        <Container>
            <MapContainer center={USER_POSITION} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={USER_POSITION}>
                    <Popup>Você está aqui</Popup>
                </Marker>
            </MapContainer>
        </Container>
    )
}

export default CamaraMap;