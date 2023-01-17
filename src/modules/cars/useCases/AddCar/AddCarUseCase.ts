import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../errors/AppError";
import { ICarDTO } from "../../dtos/ICarDTO";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class AddCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute({
    brand,
    model,
    year,
    km,
    color,
    chassis,
    purchase_price,
    status,
  }: ICarDTO) {
    const carAlreadyExists = await this.carsRepository.findByChassi(chassis);
    if (carAlreadyExists) {
      throw new AppError("Car Already Exists!")
    }

    await this.carsRepository.create({
      brand,
      model,
      year,
      km,
      color,
      chassis,
      purchase_price,
      status,
    })
  }
}


export { AddCarUseCase }