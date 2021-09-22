import { getCustomRepository } from 'typeorm'
import { OngsRepositories } from '../repositories/OngsRepositories'

export class ListOngsByOwnerService {
  async execute (ownerID: string) {
    const ongsRepository = getCustomRepository(OngsRepositories)

    const ongList = await ongsRepository.find({
      where: {
        ownerID: ownerID
      }
    })

    return ongList
  }
}
