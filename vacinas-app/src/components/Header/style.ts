import styled from "styled-components";

export const HeaderBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #5D90DD;
    padding: 0 32px;
`;

export const Logo = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`;

export const LogoImg = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 8px;
`;

export const LogoText = styled.h1`
    font-weight: 500;
    font-size: 24px;
    color: white;
`;

export const UserMenu = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    gap: 8px;
    font-size: 28px;
    align-items: center;

    > * {
        cursor: pointer;
    }
`;