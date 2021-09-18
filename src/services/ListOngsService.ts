import { getCustomRepository } from 'typeorm'
import { OngsRepositories } from '../repositories/OngsRepositories'

export class ListAllOngsService {
  async execute () {
    const ongsRepository = getCustomRepository(OngsRepositories)

    const ongList = await ongsRepository.find()

    return ongList
  }
}
