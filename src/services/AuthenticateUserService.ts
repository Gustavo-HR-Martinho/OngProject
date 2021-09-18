import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IAuthenticateRequest {
  email: string,
  password: string
}

export class AuthenticateUserService {
  async execute ({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({ email })

    if (!user) {
      throw new Error('Invalid credentials')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Invalid credentials')
    }

    const token = sign({
      email: user.email
    }, '3c6c255b98e7b1c909501d809267126d', {
      subject: user.id,
      expiresIn: '1d'
    })

    const data = {
      token,
      user
    }

    return data
  }
}
