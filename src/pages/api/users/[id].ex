import { NextApiRequest, NextApiResponse } from "next";

const users = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);

  const users = [
    { id: 1, name: 'Mayderson1' },
    { id: 2, name: 'Mayderson2' },
    { id: 3, name: 'Mayderson3' },
  ];

  const userFiltered = users
    .find((user) => user.id === Number(req.query.id));

  return res.json(userFiltered);
}

export default users;