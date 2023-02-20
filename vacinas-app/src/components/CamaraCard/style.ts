import styled from "styled-components";

// Vermelho : DD4C4C
// Azul : 5D90DD

export const Card = styled.div`
    background-color: #5D90DD;
    margin: 8px;
    border-radius: 6px;
    width: 252px;
`;

export const CardHeader = styled.div`
    border-bottom: 5px solid rgba(0,0,0,0.35);
    text-align: right;
    padding: 4px 8px;
    font-size: 16px;
    font-weight: 500;
`;

export const CardBody = styled.div`
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.35);
    font-size: 28px;
`;

export const CardFooter = styled.div`
    border-top: 5px solid rgba(0,0,0,0.35);
    padding: 8px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-end;
`;

export const CamaraName = styled.h4`
    margin: 4px;
    font-size: 32px;
    font-weight: 500;
`;

export const Button = styled.button`
    border : none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 200;
    padding: 4px 8px;
    background-color: rgba(0,0,0,0.35);
    color: white;
`;

export const TemperaturaText = styled.span`
    font-size: 18px;
    font-weight: 500;
`;

export const TemperaturaContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;