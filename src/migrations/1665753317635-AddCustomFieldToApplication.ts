import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCustomFieldToApplication1665753317635
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'application',
      new TableColumn({
        name: 'additionalData',
        type: 'json',
        isNullable: true,
        default: null,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'application',
      new TableColumn({
        name: 'additionalData',
        type: 'json',
        isNullable: true,
        default: null,
      }),
    );
  }
}
