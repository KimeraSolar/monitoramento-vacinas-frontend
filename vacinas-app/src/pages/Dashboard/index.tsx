import CamaraList from "../../components/CamaraList";
import Title from "../../components/Title";
import { Section } from "../../styles/global";
import camaras from "../../mocks/camaras.json";
import CamaraMap from "../../components/CamaraMap";

function DashboardPage(){

    return (
        <Section>
            <Title>Localização das Câmaras</Title>
            <CamaraMap/>
            <CamaraList camaraList={camaras}></CamaraList>
        </Section>
    );
}

export default DashboardPage;