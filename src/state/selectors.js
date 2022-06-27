import { createSelector } from 'reselect';

const selectIds = state => state.story.storyIds;
const selectStories = state => state.story.stories;

export const hasStoriesToLoad = createSelector(
    selectIds,
    selectStories,
    (storyIds, stories) => storyIds.length > stories.length
);
