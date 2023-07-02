import styled from "styled-components";

export const StyledSection = styled.section`
    padding: 40px 90px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    .option_container {
        display: flex;
        background-color: #fff;
        margin-right: 24px;
        border-radius: 12px;
        flex: 1;
        justify-content: space-between;
        box-shadow: 8px 8px 16px 4px rgba(0,0,0,0.08);
    
    
        .option_box {
            flex: 1;
            padding: 14px;
            display: flex;
            align-items: center;
            border-right: 1px solid #ccc;

            &:last-child {
                border: none;
            }

            img {
                height: 21px;
                margin-right: 5%;
            }

            .controller {
                p {
                    font-size: 14px;
                }
            }
        }
    }

    .booking_button {
        padding: 0 24px;
        border-radius: 16px;
        background-color: var(--green);
        color: #fff;
        font-weight: 700;
        cursor: pointer;
    }

    @media(max-width: 1024px){
        padding: 20px;
    }

    @media(max-width: 900px){
        flex-direction: column;
        .option_container {
            margin-right: 0;
            align-items: center;
            border-radius: 8px 8px 0 0;
            
            .option_box {
                flex: 1;
                border: none;
            
                .controller {
                    select {
                       
                    }
                }
            }
        }

        .booking_button {
            padding: 20px;
            border-radius: 0 0 8px 8px;
        }
    }

    @media (max-width: 640px){
        padding: 0 20px;

        .option_container {
            display: none;
        }

        .booking_button {
            border-radius: 8px;
        }
    }
`