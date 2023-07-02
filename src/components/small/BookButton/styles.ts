import styled from 'styled-components';

export const StyledButton = styled.a`
    padding: 18px 24px;
    border: 2px solid var(--main-color);
    font-weight: bold;
    font-size: 20px;
    border-radius: 12px;
    transition: 500ms;

    &:hover {
        background-color: var(--main-color);
        color: #fff;
    }
`;