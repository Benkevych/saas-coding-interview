import { createSelector } from 'reselect';

export const isLoading = state => state.loading;
export const currentPage = state => state.page;
const selectIds = state => state.storyIds;
export const selectStories = state => state.stories;

export const hasStoriesToLoad = createSelector(
    selectIds,
    selectStories,
    (storyIds, stories) => storyIds.length > stories.length
);
