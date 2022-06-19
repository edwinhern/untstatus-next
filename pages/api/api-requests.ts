import type { NextApiRequest, NextApiResponse } from 'next'

type apiData = { // Structure to store and retrieve the data based from api urls
    page: {
        id: string;
        updated_at: string;
    };
    status: {
        indicator: string;
        description: string;
    };
    name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<apiData>
) {
//   res.status(200).json({ name:"sucess" })
}