import styled from "styled-components";

const handleSize = (size: string | undefined) => {
    switch (size) {
        case "big":
            return '50px' ;
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

  interface H1Props {
    size?: 'big' | 'h2' | 'h3'| 'h4'| 'h5'| 'h6',
  }

export const H1 = styled.h1<H1Props>`
    color: black;
    margin: 10px 0;
    font-size: ${({ size }) => handleSize(size)};
    font-weight: 800;

`;

