import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

export class CreateUserController {
  async handle (request: Request, response: Response) {
    const { username, email, password, usertype } = request.body

    const createUserService = new CreateUserService()

    const newUser = await createUserService.execute({ username, email, password, usertype })

    return response.json(newUser)
  }
}
