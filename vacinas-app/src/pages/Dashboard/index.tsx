import CamaraList from "../../components/CamaraList";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { Main, Container, Section } from "./style";
import camaras from "../../mocks/camaras.json";
import vacinas from "../../mocks/vacinas.json";
import VacinaList from "../../components/VacinaList";
import CamaraMap from "../../components/CamaraMap";
import TemperaturaGraphic from "../../components/TemperaturaGraphic";

function DashboardPage(){

    return (
        <Container>
            <Header />
            <Main>
                <Section>
                    <Title>Localização das Câmaras</Title>
                    <CamaraMap/>
                    <CamaraList camaraList={camaras}></CamaraList>
                </Section>
                <Section>
                    <Title>Dados da Câmara</Title>
                    <TemperaturaGraphic/>
                    <VacinaList vacinaList={vacinas}></VacinaList>
                </Section>
            </Main>
        </Container>
    );
}

export default DashboardPage;