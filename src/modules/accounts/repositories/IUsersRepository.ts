import { User } from "../../../database/models/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";


interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>
  list(): Promise<User[]>;
  findById(id: string): Promise<User>
  validateCPF(cpf: string)
  updateUser(user: User, data: IUpdateUserDTO): Promise<User>
}

export { IUsersRepository }