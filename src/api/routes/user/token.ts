import { generateToken } from "../../../db/token";
import { authenticateUser } from "../../../db/user/auth";
import { RouteArrayed } from "../../../types/route";

const Token: RouteArrayed = [
  "post",
  "/user/token",
  async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({ error: "Missing 'username' or 'password' fields!" });

    const authenticated = await authenticateUser(username, password);

    if (!authenticated)
      return res.status(401).json({ error: "Incorrect credentials" });

    const token = await generateToken(username);

    return res.json({ token });
  },
];

export default Token;
