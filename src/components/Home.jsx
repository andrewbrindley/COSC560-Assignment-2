import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
    width: 100%;
    height: 85%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledContainer = styled.div`
    width: 40%;
    height: 60%;
    background-color: orange;
`

export const Home = () => (
    <StyledHome>
        <StyledContainer>

        </StyledContainer>
    </StyledHome>
)