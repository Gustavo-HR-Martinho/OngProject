import { Request, Response } from 'express'
import { ListOngsByCategoryService } from '../services/ListOngsByCategoryService'
import { ListOngsByOwnerService } from '../services/ListOngsByOwnerService'
import { ListAllOngsService } from '../services/ListOngsService'

export class ListAllOngsController {
  async handle (request: Request, response: Response) {
    if (request.query.category !== undefined) {
      const category = request.query.category as string

      console.log(category)

      const listOngsByCategoryService = new ListOngsByCategoryService()

      const ongList = await listOngsByCategoryService.execute(category)

      return response.json(ongList)
    }

    if (request.query.owner !== undefined) {
      const ownerID = request.query.owner as string

      console.log(ownerID)

      const listOngsByOwnerService = new ListOngsByOwnerService()

      const ongList = await listOngsByOwnerService.execute(ownerID)

      return response.json(ongList)
    }

    const listAllOngsService = new ListAllOngsService()

    const ongList = await listAllOngsService.execute()

    return response.json(ongList)
  }
}
