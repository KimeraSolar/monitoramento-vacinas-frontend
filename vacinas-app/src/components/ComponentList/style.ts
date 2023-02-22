import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    flex-direction: column;
`;

export const ListContainer = styled.div`
    box-shadow: inset 0 7px 7px -7px rgba(0,0,0,0.4);
`;

type ListScrollProps = {
    columns : number
}

export const ListScroll = styled.div<ListScrollProps>`
    display: grid;
    grid-template-columns: ${ ({columns}) => "auto ".repeat(columns) };
    gap: 20px;
    overflow-y: auto;
    max-height: 450px;
`;