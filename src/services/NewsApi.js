import { ApiService } from './apiService';
import { BASE_URL, PAGE_LIMIT } from './constants';

const client = new ApiService({ baseURL: BASE_URL });

const currentPage = (limit, page = 0) => ({ start: page * limit, end: (page + 1) * limit });
const pageItems = ({ start, end, items }) => items.slice(start, end);

export const newsApi = {
    getIds: () => client.get(`/askstories.json`),
    getStory: id => client.get(`/item/${id}.json`),
    getCurrentPageStories: (ids, page) => {
        const { start, end } = currentPage(PAGE_LIMIT, page);
        const activeIds = pageItems({ start, end, items: ids });
        const storyPromises = activeIds.map(id => newsApi.getStory(id));
        return Promise.all(storyPromises);
    },
};
