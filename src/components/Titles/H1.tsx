import styled from "styled-components";
import { TitleProps } from "./Title.types";

const handleSize = (size: string | undefined) => {
    switch (size) {
        case "big":
            return '50px';
        case "h1":
            return '32px';
        case "h2":
            return '24px';
        case "h3":
            return '18.72px';
        case "h4":
            return '16px';
        case "h5":
            return '13.28px';
        case "h6":
            return '10.72p';
        default:
            return '32px';
    }
};

export const H1 = styled.h1<TitleProps>`
    color: ${({ color }) => color || 'black'};
    margin: 10px 0;
                 font-size: ${({ size }) => handleSize(size)};
    font-weight: 800;

`;

