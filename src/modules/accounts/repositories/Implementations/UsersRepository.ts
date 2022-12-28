import { IUserRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO"
import { User } from "database/models/User";



class UsersRepository implements IUserRepository {

  async create({
    cpf,
    name,
    email,
    password_hash,
    biography
  }: ICreateUserDTO): Promise<void> {

    const user = await User.create({
      cpf,
      name,
      email,
      password_hash,
      biography
    });

    await user.save()
  }

}


export { UsersRepository }