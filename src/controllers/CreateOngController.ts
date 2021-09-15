import { Request, Response } from 'express'
import { CreateOngService } from '../services/CreateOngService'

export class CreateOngController {
  async handle (request: Request, response: Response) {
    const { ongname, description, address, city, state, contactPhone, contactEmail, category, ongPP } = request.body
    const { userID } = request
    const createOngService = new CreateOngService()

    const newOng = await createOngService.execute({
      ongname,
      description,
      address,
      city,
      state,
      contactPhone,
      contactEmail,
      category,
      ongPP,
      ownerID: userID
    })

    return response.json(newOng)
  }
}
