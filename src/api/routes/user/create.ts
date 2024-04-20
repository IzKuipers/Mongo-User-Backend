import { getUserByName } from "../../../db/user/get";
import { createUser } from "../../../db/user/mutate";
import { RouteArrayed } from "../../../types/route";

const Create: RouteArrayed = [
  "post",
  "/user/create",
  async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ error: "Missing 'username' or 'password' fields!" });

    const exists = !!(await getUserByName(username));

    if (exists) {
      return res.status(409).json({ error: "Username is taken!" });
    }

    const user = await createUser(username, password);

    return res.status(200).json({
      id: user.id,
      username,
    });
  },
];

export default Create;
