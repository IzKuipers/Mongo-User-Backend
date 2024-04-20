import { getUserByName } from "../../../db/user/get";
import { deleteUser } from "../../../db/user/mutate";
import { RouteArrayed } from "../../../types/route";

const Delete: RouteArrayed = [
  "post",
  "/user/delete",
  async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ error: "Missing 'username' or 'password' fields!" });

    const exists = !!(await getUserByName(username));

    if (!exists) {
      return res.status(404).json({ error: "User doesn't exist!" });
    }

    const deleted = await deleteUser(username);

    return res.status(200).json({
      deleted,
      username,
    });
  },
];

export default Delete;
