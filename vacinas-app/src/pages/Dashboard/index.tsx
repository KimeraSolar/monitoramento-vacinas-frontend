import CamaraList from "../../components/CamaraList";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { Main, Container, Section } from "./style";

function DashboardPage(){

    return (
        <Container>
            <Header />
            <Main>
                <Section>
                    <Title>Localização das Câmaras</Title>
                    <Title>Mapa</Title>
                    <CamaraList></CamaraList>
                </Section>
                <Section>
                    <Title>Dados da Câmara</Title>
                    <Title>Gráfico de Temperatura</Title>
                    <Title>Vacinas</Title>
                </Section>
            </Main>
        </Container>
    );
}

export default DashboardPage;