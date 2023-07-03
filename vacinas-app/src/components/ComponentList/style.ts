import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
`;

export const TitleContainer = styled.div`
    flex: 100%;
`;

export const ActionButton = styled.div`
    cursor: pointer;
    border-radius: 50%;
    color: #fff;
    background-color: #5D90DD;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
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