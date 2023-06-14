import CamaraList from "../../components/CamaraList";
import Title from "../../components/Title";
import { Section } from "../../styles/global";
import camaras from "../../mocks/camaras.json";
import CamaraMap from "../../components/CamaraMap";
import { GerenteContext } from "../../contexts/gerenteContext";
import { useContext, useEffect } from "react";
import getCamaras from "../../api/camaras";

function DashboardPage(){

    const gerenteContext = useContext(GerenteContext);

    useEffect(()=>{
        const camaras = getCamaras(gerenteContext.username);
    },[])

    return (
        <Section>
            <Title>Localização das Câmaras</Title>
            <CamaraMap camaras={[]}/>
            <CamaraList camaraList={[]}></CamaraList>
        </Section>
    );
}

export default DashboardPage;