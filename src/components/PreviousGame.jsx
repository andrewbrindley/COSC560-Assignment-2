import React from 'react';
import styled from 'styled-components';
import { Game } from './Game';

const StyledPreviousGame = styled.div`
    width: 75%;
    height: 8%;
    max-height: 20%;
    border: 1px solid black;
    margin-top: 10%;
    margin-bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GameLogButton = styled.button`
    height: 70%;
    width: 25%;
    border-radius: 10%;
    margin-left: 10%;
`

export const PreviousGame = ({game}) => {
    const [key, value] = game;
    const [moves, turn, date] = JSON.parse(value);
    const dateString = date.split('T')[0].split('-').join`/`;

    //const [moves, winner, date] = JSON.parse(game);
    //console.log(`Game ${key} was played on ${date}, and won by ${winner}. The moves were ${moves}.`);

    return (
        <StyledPreviousGame>
            {`Game #${key}: @${dateString} Winner: ${!turn ? 'Black' : 'White'}`}
            <GameLogButton>
                View game log
            </GameLogButton>
        </StyledPreviousGame>
    )
}