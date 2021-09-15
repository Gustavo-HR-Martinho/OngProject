import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('ongs')
export class Ong {
  @PrimaryColumn()
  readonly id: string

  @Column()
  ongname: string

  @Column()
  description: string

  @Column()
  address: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  contactPhone: string

  @Column()
  contactEmail: string

  @Column()
  category: string

  @Column()
  ongPP: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @JoinColumn({ name: 'ownerID' })
  @ManyToOne(() => User)
  owner: User

  @Column()
  ownerID: string

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
