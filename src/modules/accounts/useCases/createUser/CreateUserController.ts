import { container } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { Request, Response } from "express"



class CreateUserController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { cpf, name, email, avatar, password_hash, biography } = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const userCreated = await createUserUseCase.execute({
      cpf,
      name,
      avatar,
      email,
      password_hash,
      biography
    });

    return res.json({ message: userCreated }).status(201);
  }
}


export { CreateUserController }