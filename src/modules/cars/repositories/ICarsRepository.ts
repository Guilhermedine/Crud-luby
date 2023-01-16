import { ICarDTO } from "../dtos/ICarDTO";
import { Car } from "../../../database/models/Car"

interface ICarsRepository {
  create(data: ICarDTO): Promise<void>;
  list(): Promise<Car[]>;
}

export { ICarsRepository }