import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterTableUserAddColumnUserEditor1714917353154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('user', new TableColumn({
            name: 'userEditor',
            type: 'int',
            isNullable: true,
        }));

        await queryRunner.createForeignKey('user', new TableForeignKey({
            columnNames: ['userEditor'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
