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
            <VacinaCard 
                name={vacina.name} 
                status={vacina.status} 
                tempMax={vacina.tempMax} 
                tempMin={vacina.tempMin} 
                abastecimentoDate={vacina.abastecimentoDate} 
                vencimentoDate={vacina.vencimentoDate}
            />
        ))}
    </ComponentList>
    )
}

export default VacinaList;