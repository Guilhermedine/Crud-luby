import { ListAllCarsUseCase } from "./ListAllCarsUseCase";
import { Response, Request } from "express";
import { container } from "tsyringe";


class ListAllCarsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { status } = req.query;
    const listAllCarsUseCase = container.resolve(ListAllCarsUseCase);
    const allCars = await listAllCarsUseCase.execute({ status });

    return res.status(200).json(allCars)
  }
}


export { ListAllCarsController }