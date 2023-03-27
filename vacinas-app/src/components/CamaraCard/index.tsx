import { CiTempHigh } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Camara } from "../../types/Camara";
import { Button, CamaraName, Card, CardBody, CardFooter, CardHeader, TemperaturaContainer, TemperaturaText } from "./style";

type TemperaturaProps = {
    children : string;
}

function Temperatura ({children} : TemperaturaProps){
    return (
        <TemperaturaContainer>
          <CiTempHigh/> <TemperaturaText>{children} °C</TemperaturaText>
        </TemperaturaContainer>
    )
}

function CamaraCard ({ camaraStatus, camaraTemperature, camaraName} : Camara){
    const navigate = useNavigate();
    return (
        <Card camaraStatus={camaraStatus}>
            <CardHeader>{camaraStatus}</CardHeader>
            <CardBody>
                <Temperatura>{camaraTemperature}</Temperatura>
                <CamaraName>Câmara {camaraName}</CamaraName>
            </CardBody>
            <CardFooter>
                <Button>Ver no Mapa</Button>
                <Button onClick={() => navigate(`/camara/${camaraName}`)}>Ver Detalhes</Button>
            </CardFooter>
        </Card>
    )
}

export default CamaraCard;