import type { NextApiRequest, NextApiResponse } from 'next';

export default function Hello(req: NextApiRequest, res: NextApiResponse) {
    res.json({
        hello: 'world'
    });
};