import React from 'react';
import styled from 'styled-components';
import {Tile} from './Tile';


const StyledContainer = styled.div`
    width: 45%;
    height: 75%;
    border: 2px solid purple;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledGame = styled.div`
    width: 75%;
    height: 80%;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(${p => p.n}, 1fr);
    grid-template-columns: repeat(${p => p.n}, 1fr);
`



export const Game = ({n}) => (
    <StyledContainer>
        <StyledGame n={n}>
            {[...Array(n*n)].map(_ => <Tile/>)}
        </StyledGame>
    </StyledContainer>
)