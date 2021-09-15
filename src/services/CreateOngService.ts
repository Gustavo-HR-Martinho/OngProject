import { getCustomRepository } from 'typeorm'
import { OngsRepositories } from '../repositories/OngsRepositories'

interface IOngRequest {
  ongname: string
  description: string
  address: string
  city: string
  state: string
  contactPhone: string
  contactEmail: string
  category: string
  ongPP: string
  ownerID: string
}

export class CreateOngService {
  async execute ({ ongname, description, address, city, state, contactPhone, contactEmail, category, ongPP, ownerID }: IOngRequest) {
    const ongsRepositories = getCustomRepository(OngsRepositories)
    const ongAlreadyExists = await ongsRepositories.findOne({ ongname })
    if (ongAlreadyExists) {
      throw new Error('Ong already exists')
    }

    const newOng = ongsRepositories.create({
      ongname,
      description,
      address,
      city,
      state,
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
