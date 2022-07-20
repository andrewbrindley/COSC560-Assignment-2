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
    border-right: 1px solid black;
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
    border-right: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Move = ({index, black, white}) => {
    const blackI = black[0];
    const whiteI = white[0];
    return (
        <StyledMoveContainer>
            <MoveIndex>
                <span>
                    {index}
                </span>
            </MoveIndex>
            <StyledMove>
                {blackI}
            </StyledMove>
            <StyledMove>
                {whiteI}
            </StyledMove>
        </StyledMoveContainer>
    )
}