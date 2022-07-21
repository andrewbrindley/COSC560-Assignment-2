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
        color: ;
    }
`;

const StyledMove = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${p => p.current ? '#7EC8E3' : 'white'};
    &: hover{
        cursor: pointer;
        background-color: #055C9D;
        color: white;
    }
`

export const Move = ({index, black, white, replayIndex, setReplayIndex}) => {
    const blackI = black[0];
    const whiteI = white && white[0] || null;

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
                {blackI}
            </StyledMove>
            {whiteI ? <StyledMove 
                onClick = {() => setReplayIndex(whiteIndex)}
                current={whiteIndex === replayIndex}>
                {whiteI}
            </StyledMove> : null}
        </StyledMoveContainer>
    )
}