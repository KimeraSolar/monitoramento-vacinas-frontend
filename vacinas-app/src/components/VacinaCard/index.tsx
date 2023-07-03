import { Vacina } from "../../types/Vacina";
import { CiTempHigh } from "react-icons/ci";
import { TbVaccine } from "react-icons/tb";
import { Card, CardBody, CardFooter, CardHeader, TextContainer, CardText, CardButton } from "./style";

type TemperaturaProps = {
    text : string,
    children : string;
}

function Temperatura ({text, children} : TemperaturaProps){
    return (
        <TextContainer>
          <CiTempHigh/> <CardText>{text}: {children} °C</CardText>
        </TextContainer>
    )
}

function VacinaCard ( {name, status, tempMax, tempMin, abastecimentoDate, vencimentoDate} : Vacina ) {
    return (
        <Card vacinaStatus={status}>
            <CardHeader>
                <TextContainer>
                    <TbVaccine/> {name}
                </TextContainer>
                <CardButton>Desabastecer</CardButton>
            </CardHeader>
            <CardBody>
                <Temperatura text="Max">{tempMax}</Temperatura>
                <Temperatura text="Min">{tempMin}</Temperatura>
                <div><CardText>Abastecimento: {abastecimentoDate}</CardText></div>
                <div><CardText>Vencimento: {vencimentoDate}</CardText></div>
            </CardBody>
            <CardFooter>{status}</CardFooter>
        </Card>
    )
}


export default VacinaCard;