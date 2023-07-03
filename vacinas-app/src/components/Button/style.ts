import styled from "styled-components";

export const ButtonContainer = styled.button`
    max-width: 300px;
    background-color: #5D90DD;
    border: none;
    padding: 8px;
    border-radius: 2px;
    color: #fff;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;

    :hover {
        background-color: #89aee6;
    }

    :active {
        background-color: #2a68c6;
    }
`;