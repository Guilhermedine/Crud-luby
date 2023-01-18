import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { User } from "../../../../database/models/User";
import { IUpdateUserDTO } from "modules/accounts/dtos/IUpdateUserDTO";



class UsersRepository implements IUsersRepository {

  async create({
    cpf,
    name,
    email,
    avatar,
    password_hash,
    biography
  }: ICreateUserDTO): Promise<void> {

    const user = await User.create({
      cpf,
      name,
      email,
      avatar,
      password_hash,
      biography
    });

    await user.save()
  }

  async findByEmail(email: string): Promise<User> {
    const user = await User.findOne({ where: { email } })
    return user
  }

  async list(): Promise<User[]> {
    const all = await User.findAll()
    return all
  }

  async findById(id: string): Promise<User> {
    const user = await User.findOne({ where: { id } })
    return user
  }

  async validateCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;

    let add
    let rev
    let i

    add = 0;
    for (i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;

    add = 0;
    for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
  }

  async updateUser(user: User, { name, avatar, biography, email, password_hash }: IUpdateUserDTO): Promise<User> {
    const result = await user.update({
      name,
      avatar,
      biography,
      email,
      password_hash,
    })
    return result
  }

  async deleteUser(user: User) {
    const result = await user.destroy();

    return result
  }
}



export { UsersRepository }