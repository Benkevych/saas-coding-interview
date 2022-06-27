// Find Hacker News API here
// https://github.com/HackerNews/API

// TODO fetch ask stories (https://hacker-news.firebaseio.com/v0/askstories.json)
// export function loadTopstories() {
//     return async (dispatch, getState) => {};
// }

// TODO fetch item by id (https://hacker-news.firebaseio.com/v0/item/<itemId>.json)
// function fetchStoryById(id) {}
import { createAction } from 'redux-toolkit';
import { newsApi } from '../services/NewsApi';

const createRequest = (type, requestCallback) => {
    const request = {
        request: createAction(`${type}_REQUEST`),
        success: createAction(`${type}_SUCCESS`),
        failure: createAction(`${type}_FAILURE`),
    };
    return (payload = {}) =>
        dispatch =>
            requestCallback({ request, payload, dispatch });
};

export const actionTypes = {
    LOAD_ITEMS: 'LOAD_ITEMS',
    LOAD_IDS: 'LOAD_IDS',
};

export const actions = {
    loadStories: createRequest(actionTypes.LOAD_ITEMS, ({ request, payload, dispatch }) => {
        const { ids, page } = payload;
        dispatch(request.request(payload));
        return newsApi
            .getCurrentPageStories(ids, page)
            .then(stories => dispatch(request.success({ stories })))
            .catch(err => dispatch(request.failure(err)));
    }),
    loadStoryIds: createRequest(actionTypes.LOAD_IDS, ({ request, payload, dispatch }) => {
        dispatch(request.request(payload));
        return newsApi
            .getIds()
            .then(storyIds => {
                dispatch(request.success({ storyIds }));
                dispatch(actions.loadStories({ storyIds, page: 0 }));
                return storyIds;
            })
            .catch(err => dispatch(request.failure(err)));
    }),
};
