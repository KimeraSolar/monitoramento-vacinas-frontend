import { CiTempHigh } from "react-icons/ci";
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

function CamaraCard (){
    return (
        <Card>
            <CardHeader>Normal</CardHeader>
            <CardBody>
                <Temperatura>8.30</Temperatura>
                <CamaraName>Câmara c01</CamaraName>
            </CardBody>
            <CardFooter>
                <Button>Ver no Mapa</Button>
                <Button>Ver Detalhes</Button>
            </CardFooter>
        </Card>
    )
}

export default CamaraCard;