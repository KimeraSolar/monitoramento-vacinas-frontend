import styled from "styled-components";

export const DialogOverlay = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const DialogContainer = styled.div`
    background-color: #ffffff;
    border-radius: 6px;
    padding: 16px;
    width: 650px;
    height: 230px;
    margin: auto;
    transform: translate(0, calc(100vh/2 - 230px));
`;

export const DialogInputContainer = styled.div`
    padding: 32px;
    width: fit-content;
    margin: auto;
`;

export const DialogButtonContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    bottom: 16px;
    width: 100%;
    left: 0;
`;