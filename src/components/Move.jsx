import React from 'react';
import styled from 'styled-components';

const StyledMoveContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
`

const MoveIndex = styled.div`
    width: 20%;
    height: 100%;
    background-color: #D3D3D3;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    > span{
        font-size: 1vw;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
`;

const StyledMove = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${p => p.current ? '#6495ED' : 'white'};
    color: ${p => p.current ? 'white' : 'black'};
    &: hover{
        cursor: pointer;
        background-color: ${p => p.current ? '#055C9D' : '#055C9D'};
        color: white;
    }
`

export const Move = ({index, black, white, replayIndex, setReplayIndex}) => {

    const blackIndex = (index * 2);
    const whiteIndex = blackIndex + 1;
    
    return (
        <StyledMoveContainer>
            <MoveIndex>
                <span>
                    {index}
                </span>
            </MoveIndex>
            <StyledMove onClick = {() => setReplayIndex(blackIndex)}
                        current={blackIndex === replayIndex}>
                {blackIndex}
            </StyledMove>
            {white && white[0] || null ? <StyledMove 
                onClick = {() => setReplayIndex(whiteIndex)}
                current={whiteIndex === replayIndex}>
                {whiteIndex}
            </StyledMove> : null}
        </StyledMoveContainer>
    )
}