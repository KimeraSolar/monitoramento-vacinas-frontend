import styled from "styled-components";

export const DropdownContainer = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 300px;
    justify-content: flex-start;
`

export const DropdownLabel = styled.span`
    color: #686868;
    font-weight: 500;
`;

export const DropdownField = styled.select`
    font-size: 1.2rem;
    outline: none;
    padding: 4px;
    border-radius: 2px;
    border: solid 1px #808080;

    :focus, :hover {
        border-color: #5D90DD;
    }
`;