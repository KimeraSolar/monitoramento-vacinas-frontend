import { useNavigate } from "react-router-dom";
import { Camara } from "../../types/Camara";
import CamaraCard from "../CamaraCard";
import ComponentList from "../ComponentList";

type CamaraListProps = {
    camaraList : Array<Camara>
}

function CamaraList ({camaraList} : CamaraListProps) {
    const navigate = useNavigate();

    return (
        <ComponentList title="Câmaras" columns={2} onCreate={() => navigate('/camara/inserir')}>
            {camaraList.map( (camara) => (<CamaraCard key={camara.camaraName} camaraName={camara.camaraName} camaraStatus={camara.camaraStatus} camaraTemperature={camara.camaraTemperature}></CamaraCard>) )}
        </ComponentList>        
    )
}

export default CamaraList;