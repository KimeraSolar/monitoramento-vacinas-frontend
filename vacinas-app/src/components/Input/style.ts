import styled from "styled-components";

export const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 300px;
    justify-content: flex-start;
`
export const InputLabel = styled.span`
    color: #686868;
    font-weight: 500;
`;

export const InputField = styled.input`
    font-size: 1.2rem;
    outline: none;
    padding: 4px;
    border-radius: 2px;
    border: solid 1px #808080;

    :focus, :hover {
        border-color: #5D90DD;
    }

    :disabled {
        background-color: #e6e6e6;
    }
`;