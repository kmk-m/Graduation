import Router from "express";
const router = Router();

router.get("/", (req, res) => {
  console.log("delete");
  res.clearCookie("access_token");
  res.end();
});
export default router;
