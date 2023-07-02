import styled from "styled-components";

export const StyledSection = styled.section`
    padding: 0 40px;
    margin-top: 90px;

    .card_carousel {
        max-width: 1100px;
        overflow: hidden;
        margin: 48px auto 48px auto;
        cursor: grab;

        .card_rail {
            display: flex;
            padding: 24px 0;
            gap: 20px;
        }
    }

    @media(max-width: 425px){
        padding: 0 20px;
    }
`;