import { container } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { Request, Response } from "express"



class CreateUserController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { cpf, name, email, password_hash, biography } = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      cpf,
      name,
      email,
      password_hash,
      biography
    });

    return res.status(201).send();
  }
}


export { CreateUserController }