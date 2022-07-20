import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        border-radius: 50%;
        width: 90%;
        height: 90%;
        border: 2px solid black;
        &.black{
            background-color: black;
        }
        &.white{
            background-color: white;
        }
    }
    & > span{
        
    }
`;

export const Tile = ({tileClicked, index, value, replay}) => {

    const colour = !value ? 'black' : 'white';

    return( 
        <StyledTile onClick={tileClicked}>
            {replay ? <span> {index} </span> : 
            value < 0 ? null : <div className={colour}/>}
        </StyledTile>
    )
}