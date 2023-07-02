import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin-top: 90px;
    background-color: #D9D9D920;
    padding: 48px;

    .top_footer {
        display: flex;
        justify-content: space-evenly;
    
        h3 {
            font-size: 18px;
            margin-bottom: 24px;
        }

        p {
            font-size: 14px;
            margin-bottom: 14px;
            color: #84829A;
        }

        .social {
            display: flex;
            gap: 14px;
            margin-top: 36px;

            a {
                background-color: var(--brown);
                display: flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                border-radius: 4px;
                padding: 8px;
            }
        }

        .jjng, .location, .contact {
            width: fit-content;
        }
    }

    .bottom_footer {
        border-top: 2px solid #84829A20;
        padding-top: 32px;
        margin-top: 44px;
        font-size: 14px;

        font-weight: bold;
    }

    @media(max-width: 1024px){
        .top_footer {
            justify-content: space-between;
        }
    }

    @media(max-width: 900px){
        margin-top: 44px;
        background-color: transparent;
    }

    @media(max-width: 768px){
        .top_footer {
            flex-direction: column;
            gap: 36px;
        }
    }

    @media(max-width: 425px){
        padding: 48px 20px;
    }
`;