import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableComment1714861256800 implements MigrationInterface {

    private commentTable = new Table({
        name: 'comment',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'description',
                type: 'text'
            },
            {
                name: 'user_id',
                type: 'int',
                isNullable: true
            },
            {
                name: 'post_id',
                type: 'int',
                isNullable: true
            }
        ],
        foreignKeys: [{
            columnNames: ['user_id'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE'
        }, {
            columnNames: ['post_id'],
            referencedTableName: 'post',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE'
        }]
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.commentTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
