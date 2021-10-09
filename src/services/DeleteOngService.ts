import { getCustomRepository } from 'typeorm'
import { OngsRepositories } from '../repositories/OngsRepositories'

export class DeleteOngService {
  async execute (ongID: string) {
    const ongRepository = getCustomRepository(OngsRepositories)

    const selectedOng = await ongRepository.find({
      where: {
        id: ongID
      }
    })

    console.log(selectedOng)

    if (!selectedOng) {
      throw new Error('Ong does not exist')
    }

    try {
      await ongRepository.remove(selectedOng)
      const ongList = await ongRepository.find()
      return ongList
    } catch (err) {
      throw new Error(err)
    }
  }
}
