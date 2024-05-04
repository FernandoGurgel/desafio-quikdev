import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTablePost1714854299474 implements MigrationInterface {

    private postTable = new Table({
        name: 'post',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'title',
                type: 'varchar',
                length: '100',
                isNullable: true
            },
            {
                name: 'description',
                type: 'text',
                isNullable: true
            },
            {
                name: 'user_id',
                type: 'int',
                isNullable: true
            }
        ]
    })
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.postTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
