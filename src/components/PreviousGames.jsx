import React from 'react';
import styled from 'styled-components';
import {PreviousGame} from './PreviousGame';

const StyledContainer = styled.div`
    width: 90%;
    height: 90%;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledPreviousGames = styled.div`
    width: 75%;
    height: 85%;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
`;

export const PreviousGames = () => {

    return (
        <StyledContainer>
            <StyledPreviousGames>
                {Object.entries(localStorage).sort((a, b) => +a[0] - +b[0]).map(game => <PreviousGame game={game}/>)}
            </StyledPreviousGames>
        </StyledContainer>
    )
}