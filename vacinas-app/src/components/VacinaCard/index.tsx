import { Vacina } from "../../types/Vacina";
import { CiTempHigh } from "react-icons/ci";
import { TbVaccine } from "react-icons/tb";
import { Card, CardBody, CardFooter, CardHeader, TextContainer, CardText, CardButton } from "./style";
import OptionsDialog from "../OptionsDialog";
import { useContext, useState } from "react";
import { CamaraContext } from "../../contexts/camaraContext";
import { handleSubmit } from "../../utils/handleSubmit";
import { useNavigate } from "react-router-dom";
import MoveVacinaDialog from "../MoveVacinaDialog";

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

async function handleMoverVacina({vacinaId, camaraAtualId, camaraNovaId, vacinaName, onSuccess} : {vacinaId: string, camaraAtualId: string, camaraNovaId: string, vacinaName:string, onSuccess?: () => void} ){
    handleSubmit(`mover`, {vacinaId, camaraAtualId, camaraNovaId}, `Não foi possível mover ${vacinaName} da Câmara ${camaraAtualId} para ${camaraNovaId}`, onSuccess);
}

async function handleRetirarVacina({vacinaId, camaraAtualId, vacinaName, onSuccess}: {vacinaId: string, camaraAtualId: string, vacinaName:string, onSuccess?: () => void}) {
    handleSubmit(`desabastecer`, {vacinaId, camaraAtualId}, `Não foi possível retirar ${vacinaName} da Câmara ${camaraAtualId}`, onSuccess);
}

function VacinaCard ( {id, name, status, tempMax, tempMin, abastecimentoDate, vencimentoDate} : Vacina ) {
    const [showDialog, setShowDialog] = useState(false);
    const [showMoveDialog, setShowMoveDialog] = useState(false);
    const {camaraId} = useContext(CamaraContext);
    const navigate = useNavigate();

    return (
        <>  
            {
                showMoveDialog &&
                <MoveVacinaDialog 
                    content={`Mover vacina ${name} para nova câmara`}
                    onCancel={() => setShowMoveDialog(false)} 
                    onMove={(camaraNovaId) => {handleMoverVacina({vacinaId : id, camaraAtualId : camaraId, camaraNovaId, vacinaName : name, onSuccess:() => navigate(0)})}} 
                />
            }
            {
                showDialog &&
                <OptionsDialog 
                    content={`Deseja mover ou retirar a vacina ${name}?`} 
                    firstOptionText="Mover" 
                    onFirstOption={() => {
                        setShowMoveDialog(true);
                        setShowDialog(false);
                    }} 
                    secondOptionText="Retirar" 
                    onSecondOption={() => {handleRetirarVacina({
                        vacinaId: id, 
                        camaraAtualId : camaraId, 
                        vacinaName : name, 
                        onSuccess: () => navigate(0)})}} 
                    onCancel={() => setShowDialog(false)}
                />
            }
            <Card vacinaStatus={status}>
                <CardHeader>
                    <TextContainer>
                        <TbVaccine/> {name}
                    </TextContainer>
                    <CardButton onClick={() => setShowDialog(true)}>Desabastecer</CardButton>
                </CardHeader>
                <CardBody>
                    <Temperatura text="Max">{tempMax}</Temperatura>
                    <Temperatura text="Min">{tempMin}</Temperatura>
                    <div><CardText>Abastecimento: {abastecimentoDate}</CardText></div>
                    <div><CardText>Vencimento: {vencimentoDate}</CardText></div>
                </CardBody>
                <CardFooter>{status}</CardFooter>
            </Card>
        </>
    )
}


export default VacinaCard;