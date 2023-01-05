
import { Response, Request } from "express"
import { container } from "tsyringe";
import { LocateUserUseCase } from "./LocateUserUseCase";


class LocateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    console.log(id);
    const locateUserUseCase = container.resolve(LocateUserUseCase);
    const account = await locateUserUseCase.execute({ id });
    return res.json(account).status(200).send()
  }
}


export { LocateUserController }