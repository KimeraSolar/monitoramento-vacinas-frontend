import CamaraCard from "../CamaraCard";
import Title from "../Title";
import { Container, ListContainer, ListScroll } from "./style";

function CamaraList () {
    return (
        <Container>
            <Title>Câmaras</Title>
            <ListContainer>
                <ListScroll>
                    <CamaraCard></CamaraCard>
                    <CamaraCard></CamaraCard>
                    <CamaraCard></CamaraCard>
                    <CamaraCard></CamaraCard>
                    <CamaraCard></CamaraCard>
                    <CamaraCard></CamaraCard>
                </ListScroll>
            </ListContainer>
        </Container>
    )
}

export default CamaraList;