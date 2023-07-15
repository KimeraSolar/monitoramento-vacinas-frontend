import { LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import TemperaturaChart from "../../components/TemperaturaChart";
import Title from "../../components/Title";
import VacinaList from "../../components/VacinaList";
import { Section } from "../../styles/global";
import useFetch from "../../hooks/useFetch";
import { TemperaturaCamara } from "../../types/Camara";
import { useState } from "react";
import { Vacina } from "../../types/Vacina";
import { CamaraContext } from "../../contexts/camaraContext";

export const camaraLoader = (async ( {params} : LoaderFunctionArgs) =>{
    // TODO: Retirar o filtro do mock camaras
    return {camara: params.camaraId};
}) satisfies LoaderFunction;

function CamaraView (){
    const {camara} = useLoaderData() as {camara: string};

    const {data:vacinas_data, loading:vacinas_loading, error:vacinas_error} = useFetch<Vacina[]>('/' + camara + '/vacinas');

    const {data:temperaturas_data, loading:temperaturas_loading, error:temperaturas_error} = useFetch<TemperaturaCamara[]>('/' + camara + '/temperaturas');

    const [camaraId, setCamaraId] = useState(camara);

    return (
        <CamaraContext.Provider value={{camaraId, setCamaraId}}>
            <Section>
                <Title>{`Dados da Câmara ${camara}`}</Title>
                    <TemperaturaChart temperaturas={temperaturas_data || []}/>
                <VacinaList vacinaList={vacinas_data || []}></VacinaList>
            </Section>
        </CamaraContext.Provider>
    )
}

export default CamaraView;