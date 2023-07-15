import { CiTempHigh } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Camara } from "../../types/Camara";
import { Button, CamaraName, Card, CardBody, CardFooter, CardHeader, TemperaturaContainer, TemperaturaText } from "./style";
import OptionsDialog from "../OptionsDialog";
import { useContext, useState } from "react";
import { handleSubmit } from "../../utils/handleSubmit";
import { GerenteContext } from "../../contexts/gerenteContext";

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

async function handleDesinscreverCamara({camaraId, gerenteId, onSuccess} : {camaraId:string, gerenteId:string, onSuccess?: () => void}) {
    handleSubmit('camara/desinscrever', {camaraName:camaraId, gerenteName:gerenteId}, `Não foi possível desinscrever Gerente ${gerenteId} da Câmara ${camaraId}`, onSuccess);
}

async function handleRemoverCamara({camaraId, onSuccess} : {camaraId : string, onSuccess?: () => void}) {
    handleSubmit('camara/delete', {camaraName : camaraId}, `Não foi possível remover Câmara ${camaraId} do Sistema`, onSuccess);     
}

function CamaraCard ({ camaraStatus, camaraTemperature, camaraName} : Camara){
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState(false);
    const {username} = useContext(GerenteContext);

    return (
        <>
            {
                showDialog &&
                <OptionsDialog 
                    content={`Deseja desinscrever ou remover a câmara ${camaraName}?`} 
                    firstOptionText="Desinscrever" 
                    onFirstOption={() => {handleDesinscreverCamara({camaraId : camaraName, gerenteId : username, onSuccess: () => navigate(0)})}} 
                    secondOptionText="Remover" 
                    onSecondOption={() => {handleRemoverCamara({camaraId : camaraName, onSuccess: () => navigate(0)})}} 
                    onCancel={() => setShowDialog(false)} />
            }
            <Card camaraStatus={camaraStatus}>
                <CardHeader>{camaraStatus}</CardHeader>
                <CardBody>
                    <Temperatura>{camaraTemperature}</Temperatura>
                    <CamaraName>Câmara {camaraName}</CamaraName>
                </CardBody>
                <CardFooter>
                    <Button>Ver no Mapa</Button>
                    <Button onClick={() => navigate(`/camara/${camaraName}`)}>Ver Detalhes</Button>
                    <Button onClick={() => setShowDialog(true)}>Remover</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default CamaraCard;