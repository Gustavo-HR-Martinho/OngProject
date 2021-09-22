import { Request, Response } from 'express'
import { Ong } from '../entities/Ong'
import { UpdateOngService } from '../services/UpdateOngService'

export class UpdateOngController {
  async handle (request: Request, response: Response) {
    const { ongID, ongname, address, contactPhone, contactEmail, category, ongPP } = request.body

    const updateOngService = new UpdateOngService()

    const modifiedOng = new Ong()
    modifiedOng.ongname = ongname
    modifiedOng.address = address
    modifiedOng.contactPhone = contactPhone
    modifiedOng.contactEmail = contactEmail
    modifiedOng.category = category
    modifiedOng.ongPP = ongPP

    try {
      await updateOngService.execute(ongID, modifiedOng)
      return response.status(201).json(modifiedOng)
    } catch (err) {
      throw new Error(err)
    }
  }
}
