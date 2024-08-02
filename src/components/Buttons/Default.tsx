
import styled from "styled-components";

export const Default = styled.button<{full?: boolean, minwidth?:string}>`
    cursor: pointer;
    background-color: black;
    color: white;
    font-size: 16px;
    border:none;
    padding: 4px 16px;
    min-width:${props => props.minwidth ? props.minwidth : "60px"};
    transition: ease-in-out 0.1s;
    width: ${props=> props.full ? '100%' : 'auto' };
    
    &:hover{
        //background-color: #181818;
        box-shadow: 3px 3px #00000078;
    }
`;
