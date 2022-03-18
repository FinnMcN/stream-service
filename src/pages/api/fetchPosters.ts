import type { NextApiRequest, NextApiResponse } from "next";

//Utils
import filmsData from "@/utils/films.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const qwe = req.query;
    res.send(qwe);
}
