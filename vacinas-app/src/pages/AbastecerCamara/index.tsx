import { LoaderFunctionArgs, useLoaderData, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { Section } from "../../styles/global";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";
import { handleSubmit } from "../../utils/handleSubmit";

export async function abastecimentoCamaraLoader( {params} : LoaderFunctionArgs){
    const {camaraId} = params;
    const tiposVacina = await fetch(`${process.env.REACT_APP_MONITORAVAX_URL}/tipos`);
    const tiposVacinaData = await tiposVacina.json();
    return{camaraId : camaraId, tiposVacina : tiposVacinaData}
}

interface handleSubmitAbastecimentoProps {
    camaraId : string,
    vacinaType : string, 
    vacinaName : string, 
    vacinaMinTemp : string, 
    vacinaMaxTemp : string, 
    vacinaDescarteTime: string, 
    vacinaAbastecimentoDate: string, 
    vacinaVencimentoDate : string,
    onSuccess?: () => void
}

async function handleSubmitAbastecimento({camaraId, vacinaType, vacinaName, vacinaMinTemp, vacinaMaxTemp, vacinaDescarteTime, vacinaAbastecimentoDate, vacinaVencimentoDate, onSuccess} : handleSubmitAbastecimentoProps){

    if(!vacinaType){
        await handleSubmit('tipos/inserir', {name : vacinaName, tempMin: vacinaMinTemp, tempMax: vacinaMaxTemp, tempoDescarte: vacinaDescarteTime}, `Não foi possível inserir novo tipo ${vacinaName}`);
    }
    handleSubmit(`${camaraId}/abastecer`, {name : vacinaName, abastecimentoDate: vacinaAbastecimentoDate, vencimentoDate: vacinaVencimentoDate}, `Não foi possível inserir nova vacina do tipo ${vacinaName}`, onSuccess );

}

function AbastecerCamara() {
    const { camaraId, tiposVacina } = useLoaderData() as { camaraId: string, tiposVacina: Array<{name: string, tempMin: number, tempMax: number, tempoDescarte: number}> };
    const navigate = useNavigate();

    const [ vacinaType, setVacinaType ] = useState(tiposVacina[0]?.name || '');
    const [ vacinaName, setVacinaName ] = useState('');
    const [ vacinaMinTemp, setVacinaMinTemp ] = useState('');
    const [ vacinaMaxTemp, setVacinaMaxTemp ] = useState('');
    const [ vacinaDescarteTime, setVacinaDescarteTime ] = useState('');
    const [ vacinaAbastecimentoDate, setVacinaAbastecimentoDate ] = useState(new Date().toISOString().split('T')[0]);
    const [ vacinaVencimentoDate, setVacinaVencimentoDate ] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        const tipoVacina = tiposVacina.find((tipo) => {return tipo.name.valueOf() === vacinaType.valueOf()});
        if(tipoVacina){
            setVacinaName(tipoVacina.name);
            setVacinaMinTemp(tipoVacina.tempMin.toString());
            setVacinaMaxTemp(tipoVacina.tempMax.toString());
            setVacinaDescarteTime(tipoVacina.tempoDescarte.toString());
        }else{
            setVacinaName('');
            setVacinaMinTemp('');
            setVacinaMaxTemp('');
            setVacinaDescarteTime('');
        }
    }, [vacinaType])

    return (
        <Section>
            <Form title={`Abastecer câmara ${camaraId}`} onSubmit={() => {handleSubmitAbastecimento({camaraId, vacinaType, vacinaName, vacinaMinTemp, vacinaMaxTemp, vacinaDescarteTime, vacinaAbastecimentoDate, vacinaVencimentoDate, onSuccess:() => {navigate(`/camara/${camaraId}`)}})}}>
                <Dropdown label="Tipo" name="vacinaType" value={vacinaType} onChange={setVacinaType} options={tiposVacina.map((tipoVacina) => {return {label:tipoVacina.name, value:tipoVacina.name}}).concat([{label: '- Nova Vacina -', value:''}])}/>
                <Input disabled={vacinaType !== ''} label="Nome" name="vacinaName" value={vacinaName} onChange={setVacinaName}/>
                <Input disabled={vacinaType !== ''} label="Temperatura mínima (°C)" name="vacinaMinTemp" value={vacinaMinTemp} onChange={setVacinaMinTemp}/>
                <Input disabled={vacinaType !== ''} label="Temperatura máxima (°C)" name="vacinaMaxTemp" value={vacinaMaxTemp} onChange={setVacinaMaxTemp}/>
                <Input disabled={vacinaType !== ''} label="Tempo para descarte (minutos)" name="vacinaDescarteTime" value={vacinaDescarteTime} onChange={setVacinaDescarteTime}/>
                <Input label="Data de abastecimento" name="vacinaAbastecimentoDate" value={vacinaAbastecimentoDate} onChange={setVacinaAbastecimentoDate}/>
                <Input label="Data de vencimento" name="vacinaVencimentoDate" value={vacinaVencimentoDate} onChange={setVacinaVencimentoDate}/>
            </Form>
        </Section>
    )
}

export default AbastecerCamara;