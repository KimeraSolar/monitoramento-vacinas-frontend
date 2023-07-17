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
    width: 450px;
    height: 100px;
    margin: auto;
    transform: translate(0, calc(100vh/2 - 100px));
    display: flex;
    align-items: center;
    justify-content: center;
`;