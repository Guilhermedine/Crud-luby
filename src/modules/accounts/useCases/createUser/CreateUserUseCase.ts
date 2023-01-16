import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { hash } from "bcrypt"
import { AppError } from "../../../../errors/AppError";

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
    avatar,
    password_hash,
    biography
  }: ICreateUserDTO) {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new AppError("User Already Exists!")
    }

    const invalidCpf = await this.usersRepository.validateCPF(cpf);
    if (invalidCpf == false) {
      throw new AppError("Invalid CPF")
    }


    const passwordHash = await hash(password_hash, 8);

    await this.usersRepository.create({
      cpf,
      name,
      email,
      avatar,
      password_hash: passwordHash,
      biography
    })
  }
}

export { CreateUserUseCase }