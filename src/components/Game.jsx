import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {Tile} from './Tile';
import {getTurn} from '../game';


export const StyledContainer = styled.div`
    width: 40%;
    height: 80%;
    border: 1px solid purple;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #B77729;
`;

export const StyledGame = styled.div`
    width: 75%;
    height: 85%;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(${p => p.n}, 1fr);
    grid-template-columns: repeat(${p => p.n}, 1fr);
`;

export const StyledButtons = styled.div`
    width: 75%;
    height: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const StyledButton = styled.button`
    width: 20%;
    height: 50%;
    border-radius: 10%;
    display: table-cell;
    vertical-align: middle;
    &: hover{
        cursor: pointer;
    }
`



export const Game = ({addGameToLocalStorage, isDraw, gameOver, grid, moves, resetGame, tileClicked, winner}) => {

    const turn = getTurn(grid);
    const title = isDraw ? 'Draw' : (gameOver ? !winner ? 'Black Wins' : 'White Wins' : `Current Player: ${turn ? 'White' : 'Black'}`);

    return (
        <StyledContainer>
            <h3>
                {title}
            </h3>
            <StyledGame n={Math.sqrt(grid.length)}>
                {grid.map((v, i) => <Tile value = {v} tileClicked={() => tileClicked(i)}/>)}
            </StyledGame>

            <StyledButtons>
                <StyledButton onClick = {resetGame}>
                    Restart
                </StyledButton>
                <StyledButton>
                <Link onClick = {() => {
                    if (gameOver){
                        addGameToLocalStorage(turn, moves, winner);
                        resetGame();
                    }}
                    }    
                      to={gameOver ? '/games' : '/'}>
                    Leave
                </Link>
                </StyledButton>
            </StyledButtons>
        </StyledContainer>
        )
    }