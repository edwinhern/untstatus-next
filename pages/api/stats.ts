import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

// type Data = {
//     page: {
//         id: string;
//         updated_at: string;
//     }
//     status: {
//         indicator: string;
//         description: string;
//     }
// }

// const apiAccounts: { readonly [username: string]: string } = {
//     canvas: 'https://status.instructure.com/api/v2/status.json',
//     responudus: 'https://status.respondus.com/api/v2/status.json',
//     turnitin: 'https://turnitin.statuspage.io/api/v2/status.json',
//     zoom: 'https://status.zoom.us/api/v2/status.json',
// }

// async function getCanvasStatus() {
//     try {
//         const baseUrl = `https://status.instructure.com/api/v2/status.json`
//         await Promise.all([
//             fetch('https://status.instructure.com/api/v2/status.json').then(resp => resp.json()),
//             fetch('https://status.respondus.com/api/v2/status.json').then(resp => resp.json()),
//             fetch('https://turnitin.statuspage.io/api/v2/status.json').then(resp => resp.json()),
//             fetch('https://status.zoom.us/api/v2/status.json').then(resp => resp.json()),
//         ]).then(console.log)
//     } catch(e) {
//         console.log(e)
//         return 0
//     }
// }

// export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
//     const stats = await getCanvasStatus()
//     res.status(200).json({
//        stats
//     })
// }

//  // page: {
//         //     id: "123",
//         //     updated_at: "string",
//         // },
//         // status: {
//         //     indicator: "string",
//         //     description: "string",
//         // },