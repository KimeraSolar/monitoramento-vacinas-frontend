import styled from "styled-components";

type CardProps = {
    vacinaStatus : string,
}

export const Card = styled.div<CardProps>`
    background-color : ${ ({vacinaStatus}) => {
            if (vacinaStatus === "Apropriada") return "#93D399"
            else if (vacinaStatus === "Perigo") return "#EC960A"
            else if (vacinaStatus === "Alerta") return "#DD4C4C"
            else return "#BDBDBD"
        }
    };
    margin : 8px;
    border-radius : 6px;
    min-width : 400px;
`;

export const CardHeader = styled.div`
    border-bottom: 5px solid rgba(0,0,0,0.35);
    padding: 8px;
    font-size: 22px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CardBody = styled.div`
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.35);
    font-size: 28px;
`;

export const CardFooter = styled.div`
    border-top: 5px solid rgba(0,0,0,0.35);
    padding: 8px;
    font-size: 16px;
    font-weight: 500;
    text-align: right;
`;

export const CardText = styled.span`
    font-size: 18px;
    font-weight: 500;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const CardButton = styled.button`
    border : none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 200;
    padding: 4px 8px;
    background-color: rgba(0,0,0,0.35);
    color: white;
    cursor: pointer;
`;