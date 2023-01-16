import { container } from "tsyringe"
import { Request, Response } from "express"
import { AddCarUseCase } from "./AddCarUsecase"


class AddCarController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { brand, model, year, km, color, chassis, purchase_price, status } = req.body
    const addCarUseCase = container.resolve(AddCarUseCase);

    await addCarUseCase.execute({
      brand,
      model,
      year,
      km,
      color,
      chassis,
      purchase_price,
      status,
    });

    return res.status(201);
  }
}


export { AddCarController }