import { Response, Request } from "express"
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";



class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    const userDeleted = await deleteUserUseCase.execute({ id });

    return res.json({ message: userDeleted }).status(200);
  }
}


export { DeleteUserController }