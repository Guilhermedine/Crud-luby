


import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserAvatarUseCase } from "./UserAvatarUseCase"


class UserAvatarController {
  async handle(req: Request, res: Response) {
    const { id } = req.user;

    const avatar_file = req.file.filename;

    const userAvatarUseCase = container.resolve(UserAvatarUseCase);

    await userAvatarUseCase.execute({ user_id: id, avatar_file });

    return res.status(204).send();
  }
}


export { UserAvatarController }