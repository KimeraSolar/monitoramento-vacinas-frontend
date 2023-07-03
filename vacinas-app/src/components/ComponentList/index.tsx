import React from "react";
import Title from "../Title";
import { Container, ListContainer, ListScroll, Header, TitleContainer, ActionButton } from "./style";
import { FaPlus } from "react-icons/fa";

type ListProps = {
    children : React.ReactNode,
    title : string,
    columns : number,
    onCreate?: () => void,
}

function ComponentList({children, title, columns, onCreate } : ListProps) {
    return (
        <Container>
            <Header>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <ActionButton onClick={onCreate}>
                    <FaPlus />
                </ActionButton>
            </Header>
            <ListContainer>
                <ListScroll columns={columns}>
                    {children}
                </ListScroll>
            </ListContainer>
        </Container>
    )
}

export default ComponentList;