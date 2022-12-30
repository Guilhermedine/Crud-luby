interface ICreateUserDTO {
  cpf: string,
  name: string,
  email: string,
  password_hash: string,
  biography: string,
}


export { ICreateUserDTO }