import { Car } from "../../../../database/models/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../errors/AppError";



@injectable()
class DeleteCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute({ id }): Promise<Car> {
    const car = await this.carsRepository.findById(id)
    if (!car) {
      throw new AppError("Car not found", 400)
    }

    await Car.destroy({
      where: { id }
    });

    return car
  }
}


export { DeleteCarUseCase }