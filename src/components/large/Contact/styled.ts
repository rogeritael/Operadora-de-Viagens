import styled from "styled-components";

export const StyledSection = styled.section`
    display: grid;
    place-items: center;

    .contact_box {
        display: flex;
        padding: 48px 60px;
        background-color: #D9D9D920;
        border-radius: 14px;
        align-items: center;
        gap: 40px;
        box-shadow: 8px 8px 16px 4px rgba(0,0,0,0.05);

        .text_box {
            p {
                margin-top: 14px;
            }
        }
    
        button {
            font-size: 16px;
            padding: 20px 50px;
            border-radius: 42px;
            height: fit-content;
            background-color: transparent;
            border: 2px solid var(--main-color);
            font-size: bold;
            min-width: fit-content;
            cursor: pointer;

            &:hover img {
                margin-left: 12px;
            }

            img {
                margin-left: 4px;
                transform: translateY(2px);
                height: 16px;
                transition: 200ms;
            }
        }
    }

    @media(max-width: 900px){
        .contact_box {
            width: 100%;
            border-radius: 0;
            justify-content: space-between;
            padding: 48px 40px;
            box-shadow: none;
        
            .text_box {
                span {
                    font-size: 14px;
                }

                h1 {
                    font-size: 26px;
                }

                p {
                    font-size: 14px;
                }
            }
        }
    }

    @media(max-width: 768px){
        .contact_box {
            align-items: baseline;
            flex-direction: column;
        }
    }
`;