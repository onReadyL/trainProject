// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import JsonFunction from 'json-function';
import { getSortedPostsData } from '../../../../lib/posts';

export default (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { query: { page, pageSize, } } = req;
    const list = getSortedPostsData();

    const tempPage = Number(page || '1');
    const tempPageSize = Number(pageSize || '20');

    JsonFunction.limit(tempPageSize, (tempPage - 1) * (tempPageSize));

    const result = JsonFunction.get(list);
    
    res.status(200).send({
        list: result,
        current: page,
        pageSize: tempPageSize,
        total: result.length
    })
}
