import { discontinueToken } from "../../../db/token";
import { getUserByName } from "../../../db/user/get";
import { deleteUser } from "../../../db/user/mutate";
import { RouteArrayed } from "../../../types/route";

const Logoff: RouteArrayed = [
  "post",
  "/user/logoff",
  async (req, res) => {
    const { token } = req.body;

    if (!token)
      return res.status(400).json({ error: "Missing 'token' field!" });

    const discontinued = !!(await discontinueToken(token));

    return res.status(200).json({
      discontinued,
    });
  },
];

export default Logoff;
