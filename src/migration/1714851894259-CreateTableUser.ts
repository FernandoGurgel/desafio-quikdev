import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1714851894259 implements MigrationInterface {

    private userTable = new Table({
        name: 'user',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
                length: '100'
            },
            {
                name: 'email',
                type: 'varchar',
                length: '191'
            }
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.userTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
