import { container } from "tsyringe"
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/Implementations/UsersRepository"
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository"
import { CarsRepository } from "../../modules/cars/repositories/implementations/CarsRepository"

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)
container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository)
