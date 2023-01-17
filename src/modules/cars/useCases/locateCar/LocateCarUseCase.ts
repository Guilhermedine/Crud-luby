import { ICarsRepository } from "../../repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
import { Car } from "../../../../database/models/Car";
import { AppError } from "../../../../errors/AppError";




@injectable()
class LocateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute({ id }): Promise<Car> {
    const car = await this.carsRepository.findById(id);
    if (!car) {
      throw new AppError("Car not found")
    }

    return car
  }
}


export { LocateCarUseCase }