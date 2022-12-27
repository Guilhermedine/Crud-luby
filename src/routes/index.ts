const routes = require('express').Router();
const { User } = require('../app/models')


User.create({
  cpf: 123456789,
  name: 'Guilherme',
  email: 'Guilherme.dine@yahoo.com.br',
  password_hash: '6511456196418949',
  avatar: 'dasdsadasdasdasdas',
  biography: 'dasdasdasdasdasdasdsadasdsa'
})





export { routes }