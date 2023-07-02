import styled from "styled-components";

export const StyledDiv = styled.div`
    text-align: center;
    max-width: 164px;
    
    span, h2 {
        font-size: 24px;
        font-weight: 700;
    }

    span {
        color: var(--green);
    }

    p {
        margin-top: 14px;
        font-size: 12px;
    }

    @media (max-width: 900px){
        padding: 8px;
        span, h2 {
            font-size: 20px;
        }
    }
`;