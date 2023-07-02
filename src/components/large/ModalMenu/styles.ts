import styled, { css } from "styled-components";

interface StyledSectionProps {
    isModalOpen: boolean
}

export const StyledSection = styled.section<StyledSectionProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    
    opacity: ${props => props.isModalOpen === true ? 1 : 0 };

    ${props => props.isModalOpen === false && css`
        pointer-events: none;
    `}

    ul {
        padding: 48px;
        background-color: var(--bg);
        height: 100%;
        max-width: 425px;
        width: 100%;

        li {
            z-index: 9;
            margin-bottom: 36px;
            text-align: center;

            &:first-child {
                text-align: right;
                margin-bottom: 56px;

                p {
                    cursor: pointer;
                    display: inline;
                    padding: 8px;

                    .close_icon {
                        font-size: 24px;
                    }
                }
            }

            a {
                color: var(--main-color);
                text-transform: uppercase;
            }
        }
    }

    span {
        z-index: -1;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        background-color: #00000090;
        display: block;
        width: 100%;
        height: 100%;
    }
`;
