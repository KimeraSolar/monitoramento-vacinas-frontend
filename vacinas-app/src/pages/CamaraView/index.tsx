import { LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import TemperaturaGraphic from "../../components/TemperaturaGraphic";
import Title from "../../components/Title";
import VacinaList from "../../components/VacinaList";
import vacinas from "../../mocks/vacinas.json";
import camaras from "../../mocks/camaras.json";
import { Section } from "../../styles/global";
import { Camara } from "../../types/Camara";

export const camaraLoader = (async ( {params} : LoaderFunctionArgs) =>{
    const camaraFilterResp = camaras.filter( (c) => {
        return c.camaraName === params.camaraId;
    })
    return {camara: camaraFilterResp                                                                                                                                                                                                                                                                                                                           [0]};
}) satisfies LoaderFunction;

function CamaraView (){
    const {camara} = useLoaderData() as {camara: Camara};
    return (
        <Section>
            <Title>{`Dados da Câmara ${camara.camaraName}`}</Title>
            <TemperaturaGraphic/>
            <VacinaList vacinaList={vacinas}></VacinaList>
        </Section>
    )
}

export default CamaraView;