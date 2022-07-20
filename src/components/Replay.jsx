import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import {StyledContainer, StyledGame} from './Game';
import {Tile} from './Tile';


export const Replay = () => {
    const { id } = useParams()
    const data = localStorage.getItem(id.slice(1));
    const [moves, turn, date, boardSize] = JSON.parse(data);

    const grid = [...Array(boardSize * boardSize)].map(_ => -1);

    return (
        <StyledContainer>
            <StyledGame n={boardSize}>
                {grid.map(x => <Tile tileClicked={null} value={x}/>)}
            </StyledGame>
        </StyledContainer>
    )
}