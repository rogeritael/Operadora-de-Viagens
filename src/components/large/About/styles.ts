import styled from "styled-components";


export const StyledSection = styled.section`
    padding: 0 60px;
    margin-top: 180px;
    display: flex;
    justify-content: center;

    .text_box {

        .subtitle {
            color: var(--green);
            font-weight: bold;
        }

        .title {
            font-size: 28px;
            margin-bottom: 90px;
        }

        .description {
            max-width: 320px;
        }
    }


    figure {
        position: relative;
        width: 375px;
        margin-left: 20%;
        margin-top: 80px;

        img {
            position: absolute;

            &:nth-child(1){
                top: 0;
                right: 0;
            }

            &:nth-child(2){
                top: 160px;
                right: 160px;
            }
        }
    }

    @media(max-width: 1024px){
        margin-top: 120px;
    }

    @media(max-width: 860px){
        flex-direction: column;
        position: relative;
        align-items: center;

        .text_box {

            .subtitle {
                color: var(--green);
                font-weight: bold;
                text-align: center;
            }

            .title {
                text-align: center;
            }

            .description {
                margin-top: 500px;
            }
        }
        
        figure {
            position: absolute;
            margin: 0 auto;
            top: 120px;
        }
    }

    @media(max-width: 425px){

        .text_box {
            .description {
                margin-top: 400px;
            }
        }

        figure {

            img {
                width: 160px;

                &:nth-child(1){
                    right: 40px;
                }

                &:nth-child(2){
                    top: 120px;
                    right: 160px;
                }
            }
        }
    }

    @media(max-width: 375px){
        figure {
            width: 100%;
            img {
                width: 160px;

                &:nth-child(1){
                    transform: translateX(50%);
                    right: calc(50% - 40px);
                }

                &:nth-child(2){
                    transform: translateX(50%);
                    right: calc(50% + 40px);
                }
            }
        }
    }
`;