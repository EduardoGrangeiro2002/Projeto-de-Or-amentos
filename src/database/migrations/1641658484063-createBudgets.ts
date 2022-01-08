import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createBudgets1641658484063 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'budgets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'number',
            type: 'varchar',
          },
          {
            name: 'client',
            type: 'varchar',
          },
          {
            name: 'cnpj',
            type: 'varchar',
          },
          {
            name: 'parts',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('budgets');
  }
}
