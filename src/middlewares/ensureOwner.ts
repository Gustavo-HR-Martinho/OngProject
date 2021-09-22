import { NextFunction, Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

export async function ensureOwner (request: Request, response: Response, next: NextFunction) {
  const { userID } = request

  const usersRepositories = getCustomRepository(UsersRepositories)

  const { usertype } = await usersRepositories.findOne(userID)

  if (usertype === 'owner') {
    return next()
  }

  return response.status(401).json({
    error: 'User is not owner'
  })
}
