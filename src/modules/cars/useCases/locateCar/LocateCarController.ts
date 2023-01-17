import { LocateCarUseCase } from "./LocateCarUseCase"
import { container } from "tsyringe"
import { Response, Request } from "express"




class LocateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const locateCarUseCase = container.resolve(LocateCarUseCase);
    const car = await locateCarUseCase.execute({ id })

    return res.status(200).json(car)
  }
}

export { LocateCarController }