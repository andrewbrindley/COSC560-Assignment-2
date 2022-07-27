import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledGomokuTag = styled.div`
    width: 10%;
    height: 20%;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    margin-right: 50%;
    > span {
        font-size: 1vw;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
`

export const GomokuTag = () => (
    <StyledGomokuTag>
        <span>
        <Link  style={{ textDecoration: 'none' }} to="/">Gomoku</Link>
        </span>
    </StyledGomokuTag>
)