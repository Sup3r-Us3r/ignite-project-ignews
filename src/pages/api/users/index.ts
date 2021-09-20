import { NextApiRequest, NextApiResponse } from "next";

export const users = (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Mayderson1' },
    { id: 2, name: 'Mayderson2' },
    { id: 3, name: 'Mayderson3' },
  ];

  return res.json(users);
}

export default users;
