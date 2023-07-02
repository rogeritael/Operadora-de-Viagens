import styled from "styled-components";

export const StyledArticle = styled.article`
    width: fit-content;
    height: auto;
    display: inline-block;
    background-color: #fff;
    border-radius: 8px;
    flex: 1;
    padding: 10px;
    pointer-events: none;
    box-shadow: 8px 8px 16px 4px rgba(0,0,0,0.05);

    figure {
        background-color: #ccc;
        border-radius: 8px;
        width: 320px;
        aspect-ratio: 16/8;
        overflow: hidden;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            scale: 1;
            transition: 300ms;
        }
    }

    h1 {
        margin-top: 24px;
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 700;
    }

    p {
        font-size: 16px;
        margin-bottom: 24px;
        color: #84829A;
    }

    ul {

        li {
            font-size: 14px;
            margin-bottom:4px;
            color: #84829A;
        }
    }

    &:hover {
        figure img {
            scale: 1.2;
        }
    }

    @media(max-width: 900px){
        figure {
            width: 280px;
        }
    }

    @media(max-width: 425px){
        figure {
            width: 230px;
        }

        ul {
            li {
                font-size: 12px;
            }
        }
    }
`;