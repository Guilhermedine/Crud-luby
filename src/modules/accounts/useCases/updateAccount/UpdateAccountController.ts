import { Request, Response } from "express";
import { UpdateAccountUseCase } from "./UpdateAccountUseCase";
import { container } from "tsyringe";




class UpdateAccountController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user

    const {
      name,
      avatar,
      biography,
      email,
      password_hash
    } = req.body


    const updateAccountUseCase = container.resolve(UpdateAccountUseCase)

    const update = await updateAccountUseCase.execute({
      id,
      name,
      avatar,
      biography,
      email,
      password_hash
    })

    return res.json(update).status(200).send()
  }
}

export { UpdateAccountController }