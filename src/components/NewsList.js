import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewsListEntry } from './NewsListEntry';
import { selectStories, isLoading } from '../state/selectors';
import { actions } from '../state/actions';

function NewsList() {
    const dispatch = useDispatch();
    const items = useSelector(selectStories);
    const loading = useSelector(isLoading);
    console.log(items);
    useEffect(() => {
        dispatch(actions.loadStoryIds());
    }, []);

    return loading ? (
        'Loading...'
    ) : (
        <>
            {items.map((i, k) => (
                <NewsListEntry key={k} />
            ))}
        </>
    );
}

export default NewsList;
