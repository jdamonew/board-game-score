import styled from 'styled-components'

const handleSize = (size: string | undefined) => {
    switch (size) {
        case "h1":
            return '32px' ;
        case "h2":
            return '24px' ;
        case "h3":
            return '18.72px' ;
        case "h4":
            return '16px' ;
        case "h5":
            return '13.28px' ;
        case "h6":
            return '10.72p' ;
        default:
            return '32px';
    }
  };

  interface InputProps {
    size?: 'h1' | 'h2' | 'h3'| 'h4'| 'h5'| 'h6',
  }

export const Default = styled.input<InputProps>`
    color: black;
    margin: 0;
    font-size: ${({ size }) => handleSize(size)}; 
    text-align: center;
    border: none;
    background-color: transparent;
    font-weight: 600;

    &:focus-visible{
        border: none;
        box-shadow: none;
        outline: none;
    }

`;