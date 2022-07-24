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
    const [username, updateUsername] = useState('admi');
    const [password, updatePassword] = useState('admin');
    const [grid, updateGrid] = useState([]);
    const [moves, updateMoves] = useState([]);
    const [replayIndex, updateReplayIndex] = useState(-1);
    const [lastPlayedTile, updateLastPlayedTile] = useState(-1);
    const [paths, updatePaths] = useState([]);

    useEffect(() => {
        updateGrid([...Array(boardSize * boardSize)].map(_ => -1));
    }, [boardSize]);

    useEffect(() => {
        updateLoggedIn(username === USER && password === PASS); 
    }, [username, password]);

    useEffect(() => {
        if (lastPlayedTile > -1){
            const turn = (getTurn(grid) + 1) % 2;
            const i = lastPlayedTile;
            const [x, y] = [Math.floor(i / boardSize), i % boardSize];
            updatePaths([...findPaths(grid, turn, x, y)]);
        } else {
            updatePaths([]);
            updateMoves([]);
            updateGrid([]);
        }
    }, [lastPlayedTile]);


    const isGameOver = () => {
        return grid.length & lastPlayedTile > -1 && (paths.length || grid.every(x => x > -1));

    }

    const resetGame = () => {
        updateGrid(grid => [...grid].map(_ => -1));
        updateMoves(_ => []);
        updateLastPlayedTile(-1);
    };

    const addGameToLocalStorage = (turn, moves, winner) => {
        const items = Object.entries(localStorage);
        const key = items.length + 1;
        const value = [moves, turn, new Date(), boardSize, winner]
        localStorage.setItem(key, JSON.stringify(value));
    };

    const tileClicked = (i) => {
        if (grid[i] < 0 && !isGameOver()) placeTile(i);
        
    };

    const placeTile = (i) => {
        const turn = getTurn(grid);
        updateMoves([...moves, [i, turn]]);
        updateGrid([...grid].map((v, j) => j !== i ? v : turn));
        updateLastPlayedTile(i);
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


    const gameOver = isGameOver();
    const turn = getTurn(grid);
    const winner = gameOver ? (turn + 1) % 2 : -1;

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
                    addGameToLocalStorage={addGameToLocalStorage}
                    gameOver = {gameOver}
                    grid={grid} 
                    moves = {moves}
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