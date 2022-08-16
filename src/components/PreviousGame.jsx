import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledPreviousGame = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    min-height: 7%;
    height: 7%;
    margin-top: 2%;
`;

const GameLogButton = styled.button`
    height: 70%;
    width: 25%;
    border-radius: 5%;
    margin-left: 30%;
`

export const PreviousGame = ({game}) => {
    const [key, value] = game;
    const [moves, turn, date, boardSize, winner] = JSON.parse(value);
    const dateString = date.split('T')[0].split('-').reverse().join`/`;
    

    const isDraw = winner < 0;
    const t = isDraw ? 'Draw' : `Winner: ${!winner ? 'Black' : 'White'}`
    
    return (
        <StyledPreviousGame>
            {`Game #${key} @ ${dateString} ${t}`}
            <GameLogButton>
                <Link style={{ textDecoration: 'none' }} to={`/game-log:${key}`}>
                    View game log
                </Link>
            </GameLogButton>
        </StyledPreviousGame>
    )
}