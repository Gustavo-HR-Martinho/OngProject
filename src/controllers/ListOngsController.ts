import { Request, Response } from 'express'
import { ListOngsByCategoryService } from '../services/ListOngsByCategoryService'
import { ListAllOngsService } from '../services/ListOngsService'

export class ListAllOngsController {
  async handle (request: Request, response: Response) {
    if (request.body.category) {
      const { category } = request.body

      const listOngsByCategoryService = new ListOngsByCategoryService()

      const ongList = await listOngsByCategoryService.execute(category)

      return response.json(ongList)
    }

    const listAllOngsService = new ListAllOngsService()

    const ongList = await listAllOngsService.execute()

    return response.json(ongList)
  }
}
