import CamaraList from "../../components/CamaraList";
import Title from "../../components/Title";
import { Section } from "../../styles/global";
import CamaraMap from "../../components/CamaraMap";
import { GerenteContext } from "../../contexts/gerenteContext";
import { useContext, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Camara } from "../../types/Camara";

function DashboardPage(){

    const gerenteContext = useContext(GerenteContext);

    const {data, loading, error} = useFetch<Camara[]>(process.env.REACT_APP_MONITORAVAX_URL + '/' + gerenteContext.username + '/camaras');

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
            <Title>Localização das Câmaras</Title>
            <CamaraMap camaras={data || []}/>
            <CamaraList camaraList={data || []}></CamaraList>
        </Section>
    );
}

export default DashboardPage;