import Form from "../../components/Form";
import Input from "../../components/Input";
import { Section } from "../../styles/global";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { handleSubmit } from "../../utils/handleSubmit";
import { useNavigate } from "react-router-dom";

async function handlePerigoSubmit({temperatura, onSuccess} : {temperatura : number, onSuccess?: () => void}) {
    handleSubmit('configurations/perigolimite', {temperatura}, '', onSuccess);
}

async function handleVariacaoBruscaSubmit({tempo, temperatura, onSuccess} : { tempo: string, temperatura: number, onSuccess?: () => void }) {
    handleSubmit('configurations/variacaobrusca', {tempo, temperatura}, '', onSuccess);
}

async function handleManutencaoCamaraSubmit({tempo, eventos, onSuccess}:{ tempo: string, eventos: number, onSuccess?: () => void }) {
    handleSubmit('configurations/manutencaocamara', {tempo, eventos}, '', onSuccess);
}

async function handleManutencaoSensoresSubmit({tempo, eventos, onSuccess}:{ tempo: string, eventos: number, onSuccess?: () => void }) {
    handleSubmit('configurations/manutencaosensores', {tempo, eventos}, '', onSuccess);
}

function Configuracoes() {
    const navigate = useNavigate();

    const { data: perigoLimiteData } = useFetch<{ perigoLimite: number }>('/configurations/perigolimite');
    const { data: variacaoBruscaData } = useFetch<{ tempo: string, temperatura: number }>('/configurations/variacaobrusca');
    const { data: manutencaoCamaraData } = useFetch<{ tempo: string, eventos: number }>('/configurations/manutencaocamara');
    const { data: manutencaoSensoresData } = useFetch<{ tempo: string, eventos: number }>('/configurations/manutencaosensores');

    const [tempLimit, setTempLimit] = useState(perigoLimiteData?.perigoLimite);
    const [difVariacoes, setDifVariacoes] = useState(variacaoBruscaData?.temperatura);
    const [difVariacoesTime, setDifVariacoesTime] = useState(variacaoBruscaData?.tempo);
    const [eventosObserved, setEventosObserved] = useState(manutencaoCamaraData?.eventos);
    const [eventosObservedTime, setEventosObservedTime] = useState(manutencaoCamaraData?.tempo);
    const [tempVariacoes, setTempVariacoes] = useState(manutencaoSensoresData?.eventos);
    const [tempVariacoesTime, setTempVariacoesTime] = useState(manutencaoSensoresData?.tempo);

    useEffect(() => {
        setTempLimit(perigoLimiteData?.perigoLimite);
    }, [perigoLimiteData]);

    useEffect(() => {
        setDifVariacoes(variacaoBruscaData?.temperatura);
        setDifVariacoesTime(variacaoBruscaData?.tempo);
    }, [variacaoBruscaData]);

    useEffect(() => {
        setEventosObserved(manutencaoCamaraData?.eventos);
        setEventosObservedTime(manutencaoCamaraData?.tempo);
    }, [manutencaoCamaraData]);

    useEffect(() => {
        setTempVariacoes(manutencaoSensoresData?.eventos);
        setTempVariacoesTime(manutencaoSensoresData?.tempo);
    }, [manutencaoSensoresData]);

    return (
        <Section>
            <Form title="Configurar analise de perigo" onSubmit={() => {tempLimit && handlePerigoSubmit({temperatura: tempLimit, onSuccess: () => navigate(0)})}}>
                <Input 
                    label="Próximidade do limite da temperatura ideal (°C)" 
                    name="tempLimit" value={tempLimit?.toString()} 
                    onChange={(value) => value ? setTempLimit(parseFloat(value)) : setTempLimit(0)}
                />
            </Form>
            <Form title="Configurar analise de variação brusca de temperatura" onSubmit={() => {difVariacoes && difVariacoesTime && handleVariacaoBruscaSubmit({temperatura: difVariacoes, tempo: difVariacoesTime, onSuccess: () => navigate(0)})}}>
                <Input 
                    label="Diferença de temperatura para considerar variação brusca (°C)" 
                    name="difVariacoes" 
                    value={difVariacoes?.toString()} 
                    onChange={(value) => value ? setDifVariacoes(parseFloat(value)) : setDifVariacoes(0)}
                />
                <Input 
                    label="Tempo máximo de observação (segundos)" 
                    name="difVariacoesTime" 
                    value={difVariacoesTime?.toString()} 
                    onChange={setDifVariacoesTime}
                />
            </Form>
            <Form title="Configurar alertas de manutenção em câmara" onSubmit={() => {eventosObserved && eventosObservedTime && handleManutencaoCamaraSubmit({eventos:eventosObserved, tempo:eventosObservedTime, onSuccess: () => navigate(0)})}}>
                <Input 
                    label="Quantidade de eventos observados" 
                    name="eventosObserved" 
                    value={eventosObserved?.toString()} 
                    onChange={(value) => value ? setEventosObserved(parseInt(value)) : setEventosObserved(0)}
                />
                <Input 
                    label="Tempo de observação (segundos)" 
                    name="eventosObservedTime" 
                    value={eventosObservedTime?.toString()} 
                    onChange={setEventosObservedTime}
                />
            </Form>
            <Form title="Configurar alertas de manutenção em sensores" onSubmit={() => {tempVariacoes && tempVariacoesTime && handleManutencaoSensoresSubmit({eventos:tempVariacoes, tempo:tempVariacoesTime, onSuccess: () => navigate(0)})}}>
                <Input 
                    label="Quantidade de variações bruscas de temperatura observadas" 
                    name="tempVariacoes" 
                    value={tempVariacoes?.toString()} 
                    onChange={(value) => value ? setTempVariacoes(parseInt(value)) : setTempVariacoes(0)}
                />
                <Input 
                    label="Tempo de observação (segundos)" 
                    name="tempVariacoesTime" 
                    value={tempVariacoesTime?.toString()} 
                    onChange={setTempVariacoesTime}
                />
            </Form>
        </Section>
    );
}

export default Configuracoes;