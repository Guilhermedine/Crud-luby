import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt";


interface IRequest {
  email: string,
  password_hash: string,
}

interface IResponse {
  user: {
    email: string;
    name: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password_hash }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password_hash, user.password_hash)
    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({}, "1cae38ae94f2c7f3bc8512e372e4aa26", {
      subject: user.id,
      expiresIn: "1d"
    });

    return {
      user: {
        email,
        name: user.name
      },
      token,
    }
  }
}

export { AuthenticateUserUseCase }