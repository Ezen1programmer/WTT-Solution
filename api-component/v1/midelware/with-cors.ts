import Cors from 'cors'

import { NextApiRequest, NextApiResponse } from 'next';


export type Handler = (req: NextApiRequest, res: NextApiResponse) => void;

function initCors() {
    return (req: NextApiRequest, res: NextApiResponse) =>
        new Promise((resolve, reject) => {

            Cors({})(req, res, (result: unknown) => {
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
}

export const withCors = (handler: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    await initCors()(req, res);
    return handler(req, res);
};