import { ShowCarUseCase } from "./ShowCarUseCase"
import { container } from "tsyringe"
import { Response, Request } from "express"




class ShowCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showCarUseCase = container.resolve(ShowCarUseCase);
    const car = await showCarUseCase.execute({ id })

    return res.status(200).json(car)
  }
}

export { ShowCarController }