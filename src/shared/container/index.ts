import { container } from "tsyringe"
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/Implementations/UsersRepository"

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)