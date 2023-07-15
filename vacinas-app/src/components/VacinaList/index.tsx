import { useNavigate } from "react-router-dom";
import { Vacina } from "../../types/Vacina";
import ComponentList from "../ComponentList";
import VacinaCard from "../VacinaCard";


type VacinaListProps = {
    vacinaList : Array<Vacina>
}

function VacinaList ({vacinaList} : VacinaListProps) {
    const navigate = useNavigate();

    return (
    <ComponentList title="Vacinas" columns={3} onCreate={() => navigate('abastecer')}>
        {vacinaList.map( (vacina) => (
            <VacinaCard {... vacina}/>
        ))}
    </ComponentList>
    )
}

export default VacinaList;