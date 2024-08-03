import styled from "styled-components";

interface ScoreProps {
    color?: string
}

export const Score = styled.h1<ScoreProps>`
    color: ${({color})=>color?color:"#000000"};
    font-size: 60px;
    margin: 0;
`;