import React from "react";
import Title from "../Title";
import { Container, ListContainer, ListScroll } from "./style";

type ListProps = {
    children : React.ReactNode,
    title : string,
    columns : number,
}

function ComponentList({children, title, columns} : ListProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <ListContainer>
                <ListScroll columns={columns}>
                    {children}
                </ListScroll>
            </ListContainer>
        </Container>
    )
}

export default ComponentList;