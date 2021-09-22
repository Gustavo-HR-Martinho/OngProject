import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateOngs1631687032095 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ongs',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'ongname',
            type: 'varchar'
          },
          {
            name: 'address',
            type: 'varchar'
          },
          {
            name: 'contactPhone',
            type: 'varchar'
          },
          {
            name: 'contactEmail',
            type: 'varchar'
          },
          {
            name: 'category',
            type: 'varchar'
          },
          {
            name: 'ongPP',
            type: 'varchar'
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'ownerID',
            type: 'uuid'
          }
        ],
        foreignKeys: [
          {
            name: 'FKUserID',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['ownerID'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ongs')
  }
}
