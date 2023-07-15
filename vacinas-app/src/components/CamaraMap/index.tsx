import { icon, LatLngExpression, point } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"; 
import { Container } from "./style";
import userMarker from '../../assets/user-marker.png';
import goodCamaraMarker from '../../assets/good-chamber-marker.png';
import evilCamaraMarker from '../../assets/evil-chamber-marker.png';
import inactiveCamaraMarker from '../../assets/inactive-chamber-marker.png';
import dangerCamaraMarker from '../../assets/danger-chamber-marker.png';
import { Camara } from "../../types/Camara";

function CamaraMap({camaras} : {camaras:Camara[]}) {
    const USER_POSITION: LatLngExpression = [-20.251722001753862, -40.26626320636542];

    const userIcon = icon({
        iconUrl: userMarker,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    const evilCamaraIcon = icon({
        iconUrl: evilCamaraMarker,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    })

    const goodCamaraIcon = icon({
        iconUrl: goodCamaraMarker,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    })

    const inactiveCamaraIcon = icon({
        iconUrl: inactiveCamaraMarker,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    })

    const dangerCamaraIcon = icon({
        iconUrl: dangerCamaraMarker,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    })

    const camaraIcon = {
        'Normal': goodCamaraIcon,
        'Perigo': dangerCamaraIcon,
        'Alerta': evilCamaraIcon,
        'Inativa': inactiveCamaraIcon
    }

    return (
        <Container>
            <MapContainer center={USER_POSITION} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={USER_POSITION} icon={userIcon}>
                    <Popup offset={point(0, -40)}>Você está aqui</Popup>
                </Marker>
                {camaras.map(camara => (
                    <Marker 
                        position={camara.camaraLocation as LatLngExpression}
                        icon={camaraIcon[camara.camaraStatus]}
                    >
                        <Popup offset={point(0, -40)}><p style={{textAlign: 'center'}}>Câmara {camara.camaraName}<br/>{camara.camaraStatus}</p></Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Container>
    )
}

export default CamaraMap;