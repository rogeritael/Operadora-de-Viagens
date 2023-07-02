import styled from "styled-components";

export const StyledSection = styled.section`
    margin-top: 90px;

    .content_container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 60px;

        figure {
            display: flex;
            align-items: center;
            gap: 20px;

            .image_container {
                width: 240px;
                overflow: hidden;

                &:hover {

                    img {
                        scale: 1.1;
                    }
                }
            }

            img {
                width: 240px;
                object-fit: cover;
                transition: 500ms;
                cursor: pointer;
            }
            .right_side {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        }

        .text_container {
            margin: 40px;

            .why_us_text {
                max-width: 490px;
                line-height: 180%;
                margin-bottom: 90px;
            }

            .metric_box {
                display: grid;
                grid-template:
                'metric1 metric2' 1fr
                'metric3 metric4' 1fr;
            }
        }
        
    }

    @media(max-width: 1024px){
        .content_container {
            flex-direction: column;

            .text_container {
                .why_us_text {
                    margin-bottom: 0px;
                    margin-top: 40px;
                    margin-bottom: 60px;
                    max-width: 320px;
                }
            }
        }
    }

    @media(max-width: 600px){
        .content_container {

            figure {
                .left_side img, .right_side img {
                    width: 180px;
                }
            }
        }
    }

    @media(max-width: 425px){
        .content_container {

            figure {
                .left_side img, .right_side img {
                    width: 140px;
                }
            }
        }
    }

    @media(max-width: 375px){
        .content_container {

            figure {
                .left_side img, .right_side img {
                }
            }
        }
    }
`;