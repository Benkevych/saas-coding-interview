import { actionTypes } from './actions';

const initialState = {
    storyIds: [],
    stories: [],
    page: 0,
    loading: false,
    error: '',
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${actionTypes.LOAD_ITEMS}_REQUEST`:
        case `${actionTypes.LOAD_IDS}_REQUEST`:
            return {
                ...state,
                loading: true,
            };
        case `${actionTypes.LOAD_IDS}_SUCCESS`:
            return {
                ...state,
                ...action.payload,
            };
        case `${actionTypes.LOAD_ITEMS}_SUCCESS`:
            return {
                ...state,
                stories: [...state.stories, ...action.payload.stories],
                page: state.page + 1,
                loading: false,
            };
        case `${actionTypes.LOAD_ITEMS}_FAILURE`:
        case `${actionTypes.LOAD_IDS}_FAILURE`:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
