import { hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IUserRequest {
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
      throw new Error('Email already exists')
    }

    const passwordHash = await hash(password, 8)

    const newUser = usersRepository.create({ username, email, password: passwordHash, usertype })

    await usersRepository.save(newUser)

    return newUser
  }
}
