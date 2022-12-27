import { getUsersList } from "database/controllers/UserController";
import { Router } from "express"

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({message: "hello world"})
});



export { routes }