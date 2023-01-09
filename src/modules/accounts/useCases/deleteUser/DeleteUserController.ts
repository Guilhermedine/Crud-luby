import { Response, Request } from "express"
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";



class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    await deleteUserUseCase.execute({ id });

    return res.json({ message: "User Deleted!" }).status(200);
  }
}


export { DeleteUserController }