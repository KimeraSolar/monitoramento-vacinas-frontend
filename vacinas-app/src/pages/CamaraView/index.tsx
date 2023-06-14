import { LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import TemperaturaGraphic from "../../components/TemperaturaGraphic";
import Title from "../../components/Title";
import VacinaList from "../../components/VacinaList";
import vacinas from "../../mocks/vacinas.json";
import camaras from "../../mocks/camaras.json";
import { Section } from "../../styles/global";
import { Camara } from "../../types/Camara";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

export const camaraLoader = (async ( {params} : LoaderFunctionArgs) =>{
    const camaraFilterResp = camaras.filter( (c) => {
        return c.camaraName === params.camaraId;
    })
    return {camara: camaraFilterResp                                                                                                                                                                                                                                                                                                                           [0]};
}) satisfies LoaderFunction;

function CamaraView (){
    const {camara} = useLoaderData() as {camara: Camara};

    const {data, loading, error} = useFetch(process.env.REACT_APP_MONITORAVAX_URL + '/' + camara.camaraName + '/vacinas');

    useEffect(() => {
        if(loading){
            console.log('Aguardando resposta...');
        } else if (error){
            console.error(error);
            console.log(data);
        } else if (data){
            console.log('Resposta:', data);
        } else {
            console.warn('Algo deu errado D:');
        }
    }, [data, loading, error])

    return (
        <Section>
            <Title>{`Dados da Câmara ${camara.camaraName}`}</Title>
            <TemperaturaGraphic/>
            <VacinaList vacinaList={data || []}></VacinaList>
        </Section>
    )
}

export default CamaraView;