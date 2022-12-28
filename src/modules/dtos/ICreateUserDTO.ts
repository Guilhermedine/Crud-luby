interface ICreateUserDTO {
  cpf: number,
  name: string,
  email: string,
  password_hash: string,
  biography: string,
}


export { ICreateUserDTO }