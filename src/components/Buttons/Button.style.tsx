import styled from 'styled-components'
import { ButtonProps, IconButtonProps } from './Button.types'

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 2px;
    width: 70%;
    
`;

export const IconButton = styled.button<IconButtonProps>`
    cursor: pointer;
    background-color: ${({ color }) => color ? color : "black"};
    color: ${({ fontcolor }) => fontcolor ? fontcolor : "white"};
    min-width:${({ minwidth }) => minwidth ? minwidth : "60px"};
    width: ${({ full }) => full ? '100%' : 'auto'};
    font-size: 16px;
    border:none;
    padding: 8px 16px;
    transition: ease-in-out 0.1s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    &:hover{
        //background-color: #181818;
        box-shadow: 3px 3px #00000078;
    }
`;

export const Default = styled.button<ButtonProps>`
    cursor: pointer;
    background-color: ${({ color }) => color ? color : "black"};
    color: ${({ fontcolor }) => fontcolor ? fontcolor : "white"};
    font-size: 16px;
    border:none;
    padding: 4px 16px;
    min-width:${({ minwidth }) => minwidth ? minwidth : "60px"};
    transition: ease-in-out 0.1s;
    width: ${({ full }) => full ? '100%' : 'auto'};
    
    &:hover{
        //background-color: #181818;
        box-shadow: 3px 3px #00000078;
    }
`;
