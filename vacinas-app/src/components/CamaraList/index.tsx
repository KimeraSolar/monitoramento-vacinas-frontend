import { Camara } from "../../types/Camara";
import CamaraCard from "../CamaraCard";
import ComponentList from "../ComponentList";

type CamaraListProps = {
    camaraList : Array<Camara>
}

function CamaraList ({camaraList} : CamaraListProps) {
    return (
        <ComponentList title="Câmaras" columns={2}>
            {camaraList.map( (camara) => (<CamaraCard key={camara.camaraName} camaraName={camara.camaraName} camaraStatus={camara.camaraStatus} camaraTemperature={camara.camaraTemperature}></CamaraCard>) )}
        </ComponentList>        
    )
}

export default CamaraList;