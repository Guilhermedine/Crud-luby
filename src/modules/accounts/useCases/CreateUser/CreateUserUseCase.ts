import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    cpf,
    name,
    email,
    password_hash,
    biography
  }: ICreateUserDTO) {

    await this.usersRepository.create({
      cpf,
      name,
      email,
      password_hash,
      biography
    })
  }
}

export { CreateUserUseCase }