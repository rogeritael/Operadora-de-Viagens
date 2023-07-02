import styled, { keyframes } from 'styled-components';

const textEntry = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const StyledHeader = styled.header`
    padding: 36px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;

    .logo {
        font-size: 28px;
        font-weight: bold;
        span {
            color: #85AA89;
        }
    }

    nav {
        a {
            margin-left: 48px;
            font-weight: 600;
            font-size: 16px;
            opacity: 0;
            animation: ${textEntry} 1000ms ease-in-out 400ms forwards;
            position: relative;

            &::after {
                content: '';
                left: 0;
                transition: 500ms;
                bottom: -4px;
                width: 100%;
                scale: 0;
                height: 2px;
                position: absolute;
                background-color: var(--main-color);
            }

            &:nth-child(4):hover::after {
                scale: 0;
            }

            &:hover::after {
                scale: 1;
            }
        }

        .mobile_menu {
            display: none;
            cursor: pointer;
        }
    }

    @media(max-width: 1100px){
        padding: 30px 60px;

        nav {
            a {
                font-size: 14px;
            
                &:nth-child(4){
                    padding: 14px 24px;
                }
            }
        }
    }
    @media(max-width: 1024px){
        padding: 24px 60px;

        nav {
            a {
                font-size: 12px;
            
                &:nth-child(4){
                    padding: 14px 24px;
                }
            }
        }
    }

    @media(max-width: 900px){
        padding: 24px 40px;
        nav {
            a {
                display: none;
            }

            .mobile_menu {
                display: block;
                animation-duration: 200ms;
            }
        }
    }

    @media(max-width: 425px){
        padding: 20px;
    }
`;