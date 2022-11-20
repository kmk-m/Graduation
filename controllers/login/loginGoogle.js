import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
import Responses from "../../util/response.js";

const __dirname = path.dirname(__filename);
export default async function loginGoogle(req, res, next) {
  let { token } = req.params;
  res.cookie("access_token", token); //Sets name = express

  return Responses.success(res, "success", "success");
}
