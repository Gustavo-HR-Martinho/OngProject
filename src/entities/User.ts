import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  readonly id: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  usertype: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
