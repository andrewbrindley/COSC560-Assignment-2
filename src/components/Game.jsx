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
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
`



export const Game = () => (
    <StyledContainer>
        <StyledGame>
            {[...Array(100)].map(_ => <Tile/>)}
        </StyledGame>
    </StyledContainer>
)