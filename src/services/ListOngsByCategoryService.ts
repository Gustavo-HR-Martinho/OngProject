import { getCustomRepository } from 'typeorm'
import { OngsRepositories } from '../repositories/OngsRepositories'

export class ListOngsByCategoryService {
  async execute (ongCategory: string) {
    const ongsRepository = getCustomRepository(OngsRepositories)

    const ongList = ongsRepository.find({
      where: {
        category: ongCategory
      }
    })

    return ongList
  }
}
