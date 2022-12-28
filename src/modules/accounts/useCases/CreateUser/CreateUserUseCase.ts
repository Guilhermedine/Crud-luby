import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { hash } from "bcrypt"

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

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error("User Already Exists!")
    }

    const passwordHash = await hash(password_hash, 8);

    await this.usersRepository.create({
      cpf,
      name,
      email,
      password_hash: passwordHash,
      biography
    })
  }
}

export { CreateUserUseCase }