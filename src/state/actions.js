// Find Hacker News API here
// https://github.com/HackerNews/API

// TODO fetch ask stories (https://hacker-news.firebaseio.com/v0/askstories.json)
// export function loadTopstories() {
//     return async (dispatch, getState) => {};
// }

// TODO fetch item by id (https://hacker-news.firebaseio.com/v0/item/<itemId>.json)
// function fetchStoryById(id) {}
import { newsApi } from '../services/NewsApi';
import { currentPage, selectIds } from './selectors';

const createAction =
    type =>
    (payload = {}) => ({
        type,
        payload,
    });

const createRequest = (type, requestCallback) => {
    const action = {
        request: createAction(`${type}_REQUEST`),
        success: createAction(`${type}_SUCCESS`),
        failure: createAction(`${type}_FAILURE`),
    };
    return (payload = {}) =>
        (dispatch, getState) =>
            requestCallback({ action, payload, dispatch, getState });
};

export const actionTypes = {
    LOAD_ITEMS: 'LOAD_ITEMS',
    LOAD_IDS: 'LOAD_IDS',
};

export const actions = {
    loadStories: createRequest(
        actionTypes.LOAD_ITEMS,
        ({ action, payload, dispatch, getState }) => {
            const state = getState();
            const page = currentPage(state);
            const ids = selectIds(state);
            dispatch(action.request(payload));
            return newsApi
                .getCurrentPageStories(ids, page)
                .then(stories => {
                    dispatch(action.success({ stories }));
                })
                .catch(err => dispatch(action.failure(err)));
        }
    ),
    loadStoryIds: createRequest(actionTypes.LOAD_IDS, ({ action, payload, dispatch }) => {
        dispatch(action.request(payload));
        return newsApi
            .getIds()
            .then(storyIds => {
                dispatch(action.success({ storyIds }));
                dispatch(actions.loadStories());
            })
            .catch(err => dispatch(action.failure(err)));
    }),
};
