import { getCustomRepository } from 'typeorm'
import { OngsRepositories } from '../repositories/OngsRepositories'

export class ListOngsByCategoryService {
  async execute (ongCategory: string) {
    const ongsRepository = getCustomRepository(OngsRepositories)

    const ongList = await ongsRepository.find({
      where: {
        category: ongCategory
      }
    })

    return ongList
  }
}
