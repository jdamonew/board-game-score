import styled from "styled-components";

export const Divider = styled.div<{color?: string}>`
    background-color: ${props => props.color || "#000000"};
    width: 100%;
    height: 2px;
    margin: 10px 0;

`;