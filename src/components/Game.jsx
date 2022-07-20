import React from 'react';
import styled from 'styled-components';
import {Tile} from './Tile';


const StyledContainer = styled.div`
    width: 35%;
    height: 75%;
    border: 2px solid purple;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledGame = styled.div`
    width: 75%;
    height: 85%;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(${p => p.n}, 1fr);
    grid-template-columns: repeat(${p => p.n}, 1fr);
`;

const StyledButtons = styled.div`
    width: 75%;
    height: 10%;
    border: 2px solid orange;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledButton = styled.button`
    width: 20%;
    height: 50%;
    border-radius: 10%;
    display: table-cell;
    vertical-align: middle;
`



export const Game = ({grid, tileClicked}) => {

    const count = grid.reduce((a, v) => a + (v < 0 ? 0 : !v ? -1 : 1), 0);
    const isWhite = count % 2;
    const isDraw = grid.every(x => x > -1);

    const title = isDraw ? 'Draw' : `Current Player: ${isWhite ? 'White' : 'Black'}`;

    return (
        <StyledContainer>
            <h3>
                {title}
            </h3>
            <StyledGame n={Math.sqrt(grid.length)}>
                {grid.map((v, i) => <Tile value = {v} tileClicked={() => tileClicked(i)}/>)}
            </StyledGame>

            <StyledButtons>
                <StyledButton>
                    Restart
                </StyledButton>
                <StyledButton>
                    Leave
                </StyledButton>
            </StyledButtons>
        </StyledContainer>
        )
    }