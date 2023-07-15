import { useContext, useState } from "react";
import { Camara } from "../../types/Camara";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Title from "../Title";
import { DialogButtonContainer, DialogContainer, DialogInputContainer, DialogOverlay } from "./style";
import useFetch from "../../hooks/useFetch";
import { GerenteContext } from "../../contexts/gerenteContext";
import { CamaraContext } from "../../contexts/camaraContext";

interface MoveVacinaDialogProps {
    content: string;
    onMove: (camaraNovaId: string) => void;
    onCancel: () => void;
}

export default function MoveVacinaDialog({ content, onMove, onCancel }: MoveVacinaDialogProps) {
    const [camaraNovaId, setCamaraNovaId] = useState('');
    const gerenteContext = useContext(GerenteContext);
    const {camaraId} = useContext(CamaraContext);
    const {data} = useFetch<Camara[]>('/' + gerenteContext.username + '/camaras');

    return (
        <DialogOverlay>
            <DialogContainer>
                <Title>{content}</Title>
                <DialogInputContainer>
                    <Dropdown 
                        label="Nova câmara" 
                        name="camaraNovaId" 
                        options={data?.filter(camara => camara.camaraName !== camaraId).map(camara => ({ label: camara.camaraName, value: camara.camaraName})) || []} 
                        value={camaraNovaId} 
                        onChange={setCamaraNovaId}
                    />
                </DialogInputContainer>
                <DialogButtonContainer>
                    <Button onClick={() => onMove(camaraNovaId)}>Mover</Button>
                    <Button onClick={onCancel}>Cancelar</Button>
                </DialogButtonContainer>
            </DialogContainer>
        </DialogOverlay>
    );
}