import { Response, Request } from "express"
import { container } from "tsyringe";
import { UsersRepository } from "../../repositories/Implementations/UsersRepository"
import { ListAccountsUseCase } from "./ListAccountsUseCase"





class ListAccountsController {
  constructor() { }
  async handle(req: Request, res: Response): Promise<Response> {
    const listAccountsUseCase = container.resolve(ListAccountsUseCase);
    const all = await listAccountsUseCase.execute();

    return res.json(all)
  }
}

export { ListAccountsController }