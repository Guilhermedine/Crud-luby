import { ICarsRepository } from "../../repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
import { ICarUpdateDTO } from "../../dtos/ICarUpdateDTO";
import { Car } from "../../../../database/models/Car";
import { AppError } from "../../../../errors/AppError";


@injectable()
class BookingCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute(id: string, { solded_by, sale_value, status }: ICarUpdateDTO): Promise<Car> {
    const car = await this.carsRepository.findById(id);
    if (!car) {
      throw new AppError("Car not found")
    }


    await this.carsRepository.updateCar(car, {
      solded_by,
      status,
      sale_value
    })

    return car
  }
}


export { BookingCarUseCase }