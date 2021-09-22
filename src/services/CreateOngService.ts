import { getCustomRepository } from 'typeorm'
import { OngsRepositories } from '../repositories/OngsRepositories'

interface IOngRequest {
  ongname: string
  address: string
  contactPhone: string
  contactEmail: string
  category: string
  ongPP: string
  ownerID: string
}

export class CreateOngService {
  async execute ({ ongname, address, contactPhone, contactEmail, category, ongPP, ownerID }: IOngRequest) {
    const ongsRepositories = getCustomRepository(OngsRepositories)
    const ongAlreadyExists = await ongsRepositories.findOne({ ongname })
    if (ongAlreadyExists) {
      throw new Error('Ong already exists')
    }

    const newOng = ongsRepositories.create({
      ongname,
      address,
      contactPhone,
      contactEmail,
      category,
      ongPP,
      ownerID
    })

    await ongsRepositories.save(newOng)

    return newOng
  }
}
