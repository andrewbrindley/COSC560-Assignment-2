import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import {StyledButton, StyledButtons, StyledContainer, StyledGame} from './Game';
import {Tile} from './Tile';
import {group} from '../game';
import {Move} from './Move';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const ReplayContainer = styled.div`
    height: 75%;
    width: 20%;
    border: 1px solid black;
    margin-left: 2%;
`

const StyledReplayer = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ReplayButtons = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ReplayButton = styled.button`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &: hover{
        cursor: ${p => p.disabled ? 'auto' : 'pointer'};
        background-color: ${p => p.disabled ? 'none' : '#99ff99'};
        > * {
            color: ${p => p.disabled ? 'none' : 'white'};
        }
    }
`;

const applyMoves = (moves, replayIndex, grid) => {
    moves.slice(0, replayIndex+1).forEach((move, i) => {
        grid[move[0]] = move[1];
    });
    return grid;

}


export const Replay = ({replayIndex, setReplayIndex}) => {
    const { id } = useParams()
    const key = id.slice(1);
    const data = localStorage.getItem(key);
    const [moves, turn, date, boardSize, winner] = JSON.parse(data);
    const movePairs = group(moves, 2);
    const grid = applyMoves(moves, replayIndex, [...Array(boardSize * boardSize)].map(_ => -1));
    const isDraw = winner < 0;
    const gameOver = replayIndex === moves.length-1;

    return (
        <React.Fragment>
            <StyledContainer>
                <h3>
                    {gameOver ? (isDraw ? 'Draw' : !winner ? 'Black Wins' : 'White Wins') : `Current Player: ${replayIndex % 2 ? 'Black' : 'White'}`}
                </h3>
                <StyledGame n={boardSize}>
                    {grid.map((x, i) => 
                    <Tile tileClicked={null} value={x} index={i} replay={false}>
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
                            <Move 
                                index={index} 
                                black={black} 
                                white={white} 
                                replayIndex = {replayIndex} 
                                setReplayIndex = {setReplayIndex}>
                            </Move>
                        )
                    })}
                </StyledReplayer>
                <ReplayButtons>
                    <ReplayButton disabled = {replayIndex < 0}
                                  onClick={() => setReplayIndex(-1)}>
                        <KeyboardDoubleArrowLeftOutlinedIcon/>
                    </ReplayButton>
                    <ReplayButton disabled = {replayIndex < 0}
                                  onClick={() => setReplayIndex(Math.max(-1, replayIndex - 1))}>
                        <KeyboardArrowLeftOutlinedIcon/>
                    </ReplayButton>
                    <ReplayButton 
                                   disabled = {replayIndex >= moves.length}
                                   onClick={() => setReplayIndex(Math.min(moves.length-1, replayIndex+1))}>
                        <KeyboardArrowRightOutlinedIcon/>
                    </ReplayButton>
                    <ReplayButton 
                                    disabled = {replayIndex >= moves.length}
                                    onClick={() => setReplayIndex(moves.length - 1)}>
                        <KeyboardDoubleArrowRightOutlinedIcon/>
                    </ReplayButton>
                </ReplayButtons>
            </ReplayContainer>
        </React.Fragment>
    )
}