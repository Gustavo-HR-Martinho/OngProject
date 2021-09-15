import { EntityRepository, Repository } from 'typeorm'
import { Ong } from '../entities/Ong'

@EntityRepository(Ong)
export class OngsRepositories extends Repository<Ong> {

}
