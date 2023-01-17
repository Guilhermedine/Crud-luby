import { ICarDTO } from "../dtos/ICarDTO";
import { ICarFiltersDTO } from "../dtos/ICarFiltersDTO";
import { ICarUpdateDTO } from "../dtos/ICarUpdateDTO";
import { Car } from "../../../database/models/Car"

interface ICarsRepository {
  create(data: ICarDTO): Promise<void>;
  list(filters: ICarFiltersDTO): Promise<Car[]>;
  findByChassi(chassis: string): Promise<Car>
  findById(id: string): Promise<Car>
  update(car: Car, data: ICarUpdateDTO): Promise<Car>
}

export { ICarsRepository }