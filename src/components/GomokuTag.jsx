import styled from 'styled-components';

const StyledGomokuTag = styled.div`
    width: 20%;
    height: 60%;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    > span {
        font-size: 2.5vw;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
`

export const GomokuTag = () => (
    <StyledGomokuTag>
        <span>
            Gomoku
        </span>
    </StyledGomokuTag>
)