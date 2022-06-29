import { Card, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Item = styled(Card)`
    width: 250px;
    padding: 28px 7px;
    background: #393c3e;
    position: relative;
`;

export const Title = styled(Typography)`
    color: white;
    margin-top: 5px;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.4px;
`;

export const Link = styled.a`
    color: #bfbebe;
    text-decoration: none;
`;

const Info = styled.div`
    font-size: 12px;
    color: #848886;
    position: absolute;
`;
export const Time = styled(Info)`
    top: 3px;
    left: 7px;
`;
export const Score = styled(Info)`
    bottom: 3px;
    left: 7px;
`;
export const Author = styled(Info)`
    bottom: 3px;
    right: 7px;
`;

export const Comments = styled(Link)`
    font-size: 12px;
    color: #848886;
    position: absolute;
    top: 3px;
    right: 7px;
`;
