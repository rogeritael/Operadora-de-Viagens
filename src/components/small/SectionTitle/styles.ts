import styled from "styled-components";

interface SectionTitleProps {
    align?: 'center' | 'left'
}

export const StyledH1 = styled.h1<SectionTitleProps>`
    font-size: 28px;
    text-align: ${props => props.align === 'left' ? 'left' : 'center'};

    span {
        color: var(--green);
        font-weight: bold;
        display: block;
        font-size: 16px;
    }
`