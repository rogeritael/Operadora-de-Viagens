import styled, { keyframes } from 'styled-components';

const modelEntry = keyframes`
    to {
        margin-right: 0;
        opacity: 1;
    }
`;

const CTAEntry = keyframes`
    to {
        opacity: 1;
    }
`;

export const StyledSection = styled.section`
    overflow-x: hidden;
    min-height: 600px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .circle_box {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }
    .circle {
        width: 600px;
        height: 600px;
        background-color: var(--blue);
        border-radius: 50%;
        position: absolute;
        right: -200px;
        top: -60px;
        z-index: -1;
    }

    .callToAction {
        opacity: 0;
        animation: ${CTAEntry} 1500ms ease-in-out 500ms forwards;
        font-size: 48px;
        max-width: 712px;
        margin-left: 60px;

        span {
            color: var(--green);
        }
    }
    
    .girl_model {
        animation: ${modelEntry} 500ms ease-in-out forwards;
        opacity: 0;
        margin-right: -100px;
        width: 395px;
    }


    @media(max-width: 1140px){
        margin-top: 30px;

        .circle {
            right: -240px;
            top: -100px;
        }

        .callToAction {
            font-size: 36px;
            max-width: 519px;
        }

        .girl_model {
            width: 355px;
        }
    }

    @media(max-width: 1024px){
        margin-top: 40px;
    }

    @media(max-width: 930px){
        margin-top: 20px;

        .circle {
            right: -280px;
            top: -140px;
        }

        .callToAction {
            font-size: 30px;
            max-width: 497px;
        }

        .girl_model {
            width: 296px;
        }
    }

    @media(max-width: 768px){
        margin-top: 0;

        .circle {
            right: -320px;
            top: -180px;
        }

        .callToAction {
            font-size: 28px;
            max-width: 478px;
        }

        .girl_model {
            width: 246px;
        }
    }


    @media(max-width: 620px){
        flex-direction: column;
        justify-content: space-evenly;
        margin-top: 100px;
        height: fit-content;
        height: calc(100vh - 100px - 20px);
        padding: 0 20px 30px 20px;
        padding-top: 50px;

        .circle {
            width: 900px;
            height: 900px;
            left: 50%;
            transform: translateX(-50%);
            top: -480px;
        }

        .callToAction {
            font-size: 28px;
            max-width: 391px;
            text-align: center;
            margin: 0;
            order: 2;
        }

        .girl_model {
            width: 246px;
            order: 1;
        }
    }
`;