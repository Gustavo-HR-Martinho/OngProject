import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IUserRequest{
  username: string,
  email: string,
  password: string,
  usertype: string
}

export class CreateUserService {
  async execute ({ username, email, password, usertype }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email) {
      throw new Error('Missing email')
    }

    const userAlreadyExists = await usersRepository.findOne({ email })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const newUser = usersRepository.create({ username, email, password, usertype })

    await usersRepository.save(newUser)

    return newUser
  }
}
