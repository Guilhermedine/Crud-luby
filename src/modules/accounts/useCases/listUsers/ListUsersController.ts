import { Response, Request } from "express"
import { container } from "tsyringe";
import { ListUsersUseCase } from "./ListUsersUseCase"





class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);
    const all = await listUsersUseCase.execute();

    return res.status(200).json(all);
  }
}

export { ListUsersController }