import UserModel from '../models/UserModel'

export const getUsersList = ( req, res ) => {
  const userListFromDB = UserModel.findAll()

  console.log(userListFromDB)

  return res.send({ message: 'message'})
}
