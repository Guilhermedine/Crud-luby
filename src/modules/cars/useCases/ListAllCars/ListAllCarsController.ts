import { ListAllCarsUseCase } from "./ListAllCarsUseCase";
import { Response, Request } from "express";
import { container } from "tsyringe";


class ListAllCarsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAllCarsUseCase = container.resolve(ListAllCarsUseCase)
    const allCars = await listAllCarsUseCase.execute();

    return res.status(200).json(allCars)
  }
}


export { ListAllCarsController }