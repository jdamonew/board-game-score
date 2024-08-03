import styled from 'styled-components'

interface IconButtonProps {
    full?: boolean;
    minwidth?: string;
    color?: string;
    fontcolor?: string;
}
export const IconButton = styled.button<IconButtonProps>`
   cursor: pointer;
    background-color: ${({color})=>color?color:"black"};
    color: ${({fontcolor})=>fontcolor?fontcolor:"white"};
    font-size: 16px;
    border:none;
    padding: 8px 16px;
    min-width:${({minwidth}) => minwidth ? minwidth : "60px"};
    transition: ease-in-out 0.1s;
    width: ${({full})=> full ? '100%' : 'auto' };

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    &:hover{
        //background-color: #181818;
        box-shadow: 3px 3px #00000078;
    }
`