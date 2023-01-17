import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { container } from "tsyringe";




class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user
    const {
      name,
      avatar,
      biography,
      email,
      password_hash
    } = req.body

    const updateUserUseCase = container.resolve(UpdateUserUseCase)
    const update = await updateUserUseCase.execute(id, {
      name,
      avatar,
      biography,
      email,
      password_hash
    })

    return res.json(update).status(200);
  }
}

export { UpdateUserController }