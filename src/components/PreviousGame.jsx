import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledPreviousGame = styled.div`
    width: 75%;
    height: 8%;
    max-height: 20%;
    border: 1px solid black;
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
    const [moves, turn, date, boardSize] = JSON.parse(value);
    const dateString = date.split('T')[0].split('-').join`/`;

    //const [moves, winner, date] = JSON.parse(game);
    //console.log(`Game ${key} was played on ${date}, and won by ${winner}. The moves were ${moves}.`);

    return (
        <StyledPreviousGame>
            {`Game #${key}: @${dateString} Winner: ${!turn ? 'Black' : 'White'}`}
            <GameLogButton>
                <Link to={`/game-log:${key}`}>
                    Game Log
                </Link>
            </GameLogButton>
        </StyledPreviousGame>
    )
}