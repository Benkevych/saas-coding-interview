import { actionTypes } from './actions';

const initialState = {
    storyIds: [],
    stories: [],
    page: 0,
    loading: false,
    error: '',
};

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case `${actionTypes.LOAD_ITEMS}_REQUEST`:
        case `${actionTypes.LOAD_IDS}_REQUEST`:
            return {
                ...state,
                isFetching: true,
            };
        case `${actionTypes.LOAD_IDS}_SUCCESS`:
            return {
                ...state,
                ...payload,
            };
        case `${actionTypes.LOAD_ITEMS}_SUCCESS`:
            return {
                ...state,
                stories: [...state.stories, ...payload.stories],
                page: state.page + 1,
                isFetching: false,
            };
        case `${actionTypes.LOAD_ITEMS}_FAILURE`:
        case `${actionTypes.LOAD_IDS}_FAILURE`:
            return {
                ...state,
                error: payload,
                isFetching: false,
            };
        default:
            return state;
    }
};
