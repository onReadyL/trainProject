import * as urls from './config';

interface IBlogListParams {
    page: number,
    pageSize: number,
}

export const getBlogLost = ({ page, pageSize }: IBlogListParams) => {
    return fetch(`${urls.BLOG_LIST}?page=${page}&pageSize=${pageSize}`).then((res) => res.json());
};
