import styled from 'styled-components';
import { Container,  Typography } from '@material-ui/core';

export const Wrapper = styled(Container)`
    padding-bottom: 25px;
`;

export const Title = styled(Typography)`
    margin-top: 25px;
    color: #848884;
`;

export const Galery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    margin: 25px 0;

    div {
        flex-basis: 275px;
    }

    &::after {
        content: '';
        flex-basis: 275px;
    }
`;
