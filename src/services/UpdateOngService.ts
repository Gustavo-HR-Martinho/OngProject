import { getCustomRepository } from 'typeorm'
import { Ong } from '../entities/Ong'
import { OngsRepositories } from '../repositories/OngsRepositories'

export class UpdateOngService {
  async execute (ongID: string, newData: Ong) {
    const { ongname, address, contactPhone, contactEmail, category, ongPP } = newData

    const ongRepository = getCustomRepository(OngsRepositories)

    const selectedOng = await ongRepository.findOne({
      where: {
        id: ongID
      }
    })

    selectedOng.ongname = ongname
    selectedOng.address = address
    selectedOng.contactPhone = contactPhone
    selectedOng.contactEmail = contactEmail
    selectedOng.category = category
    selectedOng.ongPP = ongPP

    const modifiedOng = await ongRepository.save(selectedOng)

    return modifiedOng
  }
}
