import { Request, Response } from "express"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { container } from "tsyringe"



class AuthenticateUserController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { password_hash, email } = req.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const token = await authenticateUserUseCase.execute({ password_hash, email });

    return res.json(token)
  }
}

export { AuthenticateUserController }