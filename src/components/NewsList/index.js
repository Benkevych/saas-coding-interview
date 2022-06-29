import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';

import { NewsItem } from '../NewsItem';
import { selectStories, isLoading, hasStoriesToLoad } from '../../state/selectors';
import { actions } from '../../state/actions';

import { Wrapper, Title, Galery } from './styles';

export const NewsList = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectStories);
    const _hasStoriesToLoad = useSelector(hasStoriesToLoad);
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(actions.loadStoryIds());
    }, []);

    const loadMore = () => dispatch(actions.loadStories());

    return (
        <Wrapper align="center">
            <Title variant="h4" align="center">
                Hacker News Topstories
            </Title>
            <Galery>
                {items.map((i, k) => (
                    <NewsItem {...i} key={k} />
                ))}
            </Galery>
            {loading ? (
                <CircularProgress />
            ) : (
                _hasStoriesToLoad && (
                    <Button variant="contained" color="primary" onClick={() => loadMore()}>
                        Load more
                    </Button>
                )
            )}
        </Wrapper>
    );
};
