import { Request, Response } from 'express'
import { DeleteOngService } from '../services/DeleteOngService'

export class DeleteOngController {
  async handle (request: Request, response: Response) {
    const { ongID } = request.body

    const deleteOngService = new DeleteOngService()

    try {
      const ongList = await deleteOngService.execute(ongID)
      return response.status(200).json(ongList)
    } catch (err) {
      throw new Error('Ong could not be deleted')
    }
  }
}
