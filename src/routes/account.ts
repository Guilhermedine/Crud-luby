import { Router } from "express"
import { v4 as uuidV4 } from "uuid"

const registerRoutes = Router()

const registerData = [];

registerRoutes.post("/create", (req, res) => {
  const { name, email, password_hash, avatar, biography } = req.body;

  const accounts = {
    name,
    email,
    password_hash,
    avatar,
    biography,
    id: uuidV4()
  }

  registerData.push(accounts);

  return res.status(201).send();

})


export { registerRoutes } 
