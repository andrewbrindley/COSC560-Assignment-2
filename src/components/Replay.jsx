import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import {StyledButton, StyledButtons, StyledContainer, StyledGame} from './Game';
import {Tile} from './Tile';
import {group} from '../game';
import {Move} from './Move';


const ReplayContainer = styled.div`
    height: 75%;
    width: 20%;
    border: 3px solid black;
    margin-left: 2%;
`

const StyledReplayer = styled.div`
    height: 90%;
    width: 100%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
`;

const ReplayButtons = styled.div`
    width: 100%;
    height: 10%;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Replay = ({setPrevGame}) => {
    const { id } = useParams()
    const key = id.slice(1);
    setPrevGame(key);
    const data = localStorage.getItem(key);
    const [moves, turn, date, boardSize] = JSON.parse(data);

    const movePairs = group(moves, 2);
    const grid = [...Array(boardSize * boardSize)].map(_ => -1);

    return (
        <React.Fragment>
            <StyledContainer>
                <h3>
                    Current Player: Black
                </h3>
                <StyledGame n={boardSize}>
                    {grid.map((x, i) => 
                    <Tile tileClicked={null} value={x} index={i} replay={true}>
                    </Tile>)}
                </StyledGame>
                <StyledButtons>
                    <StyledButton>
                        Back
                    </StyledButton>
                </StyledButtons>
            </StyledContainer>
            <ReplayContainer>
                <StyledReplayer>
                    {movePairs.map((move, index) => {
                        const [black, white] = move;
                        return (
                            <Move index={index} black={black} white={white}>
                            </Move>
                        )
                    })}
                </StyledReplayer>
                <ReplayButtons/>
            </ReplayContainer>
        </React.Fragment>
    )
}