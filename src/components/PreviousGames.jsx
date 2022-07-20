import React from 'react';
import styled from 'styled-components';
import {PreviousGame} from './PreviousGame';

const StyledPreviousGames = styled.div`
    width: 75%;
    height: 85%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PreviousGames = () => {

    return (
        <StyledPreviousGames>
            {Object.entries(localStorage).sort().map(game => <PreviousGame game={game}/>)}
        </StyledPreviousGames>
    )
}