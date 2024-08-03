import styled from "styled-components";

interface BlockProps {
    shadow?: string,
    color?: string
}

export const Block = styled.div<BlockProps>`
    background-color: ${props=>props.color ? props.color : "#ffb833"};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 0;
    box-shadow: 7px 7px ${props=>props.shadow ? props.shadow : "#966201"};
    max-width: 310px;
`