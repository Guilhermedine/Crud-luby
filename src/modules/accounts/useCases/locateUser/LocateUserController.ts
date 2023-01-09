
import { Response, Request } from "express"
import { container } from "tsyringe";
import { LocateUserUseCase } from "./LocateUserUseCase";


class LocateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const locateUserUseCase = container.resolve(LocateUserUseCase);
    const account = await locateUserUseCase.execute({ id });

    return res.status(200).json(account);
  }
}


export { LocateUserController }