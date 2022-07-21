import React, {useEffect, useState} from 'react';
import { Routes, Route, useParams} from "react-router-dom";
import styled from 'styled-components';
import {Header} from './Header';
import {Home} from './Home';
import {Login} from './Login';
import {Game} from './Game';
import {PreviousGames} from './PreviousGames';
import {findPaths, getTurn} from '../game';
import {Replay} from './Replay';
import '../App.css';


const StyledScreen = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    display: flex;
    flex-direction: column;
    border: 2px solid blue;
`;

const MainScreen = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid green;
`;

const USER = 'admin';
const PASS = 'admin';

const App = () => {

    const [boardSize, updateBoardSize] = useState(null);
    const [loggedIn, updateLoggedIn] = useState(false);
    const [startClicked, updateStartClicked] = useState(false);
    const [username, updateUsername] = useState('admin');
    const [password, updatePassword] = useState('admin');
    const [grid, updateGrid] = useState([]);
    const [winner, updateWinner] = useState(-1);
    const [moves, updateMoves] = useState([]);
    const [replayIndex, updateReplayIndex] = useState(-1);

    useEffect(() => {
        updateGrid([...Array(boardSize * boardSize)].map(_ => -1));
    }, [boardSize]);

    useEffect(() => {
        updateLoggedIn(username === USER && password === PASS); 
    }, [username, password]);

    const resetGame = () => {
        updateGrid(grid => [...grid].map(_ => -1));
        updateWinner(-1);
        updateMoves(_ => []);
    };

    const addGameToLocalStorage = (turn, moves) => {
        const items = Object.entries(localStorage);
        const key = items.length;
        const value = [moves, turn, new Date(), boardSize]
        localStorage.setItem(key, JSON.stringify(value));
    }

    const tileClicked = (i) => {
        if (grid[i] < 0 && winner < 0){
            placeTile(i);
        }
    };

    const placeTile = (i) => {
        const turn = getTurn(grid);
        const newMoves = [...moves, [i, turn]]
        const newGrid = [...grid].map((v, j) => j !== i ? v : turn);
        const [x, y] = [Math.floor(i / boardSize), i % boardSize];
        const paths = findPaths(newGrid, turn, x, y);
        if (paths.length){
            updateWinner(turn);
            addGameToLocalStorage(turn, newMoves);
        }
        updateMoves(newMoves);
        return updateGrid(newGrid);
    };

    const setReplayIndex = (index) => {
        updateReplayIndex(index);
    }

    const setUsername = (e) => {
        updateUsername(e.target.value);
    };

    const setPassword = (e) => {
        updatePassword(e.target.value);
    };

    const setBoardSize = (e) => updateBoardSize(e.value);

    const setStartClicked = _ => updateStartClicked(true);

    return (
        <StyledScreen>
            <Header/>
            <MainScreen>
                <Routes>
                <Route path="/" element=
                    {
                    <Home
                        boardSize = {boardSize}
                        startClicked = {startClicked}
                        loggedIn = {loggedIn}
                        setStartClicked = {setStartClicked} 
                        setBoardSize={setBoardSize}/>
                    }/>
                    <Route path="/login" element=
                    {
                    <Login
                        isValidLogin = {loggedIn}
                        password = {password}
                        username = {username}
                        setPassword = {setPassword}
                        setUsername = {setUsername}
                        />
                    }/>
                    <Route path="/game" element=
                    {
                    <Game 
                    grid={grid} 
                    resetGame = {resetGame}
                    tileClicked = {tileClicked}
                    winner = {winner}
                    />
                    }/>
                    <Route path="/games" element=
                    {
                    <PreviousGames/>
                    }/>
                    <Route path="/game-log:id" element=
                    {
                    <Replay
                        replayIndex = {replayIndex}
                        setReplayIndex = {setReplayIndex}/>
                    }/>
                </Routes>
            </MainScreen>
        </StyledScreen>
    )
}

export default App;