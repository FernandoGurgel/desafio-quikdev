import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableHistoryPost1714930419337 implements MigrationInterface {

    private historyTable = new Table({
        name: 'history_post',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'old_value',
                type: 'varchar'
            },
            {
                name: 'new_value',
                type: 'varchar'
            },
            {
                name: 'field',
                type: 'varchar'
            },
            {
                name: 'post_id',
                type: 'int'
            },
            {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
            }
        ],
        foreignKeys: [
            {
                name: 'FKHistoryPost',
                referencedTableName: 'post',
                referencedColumnNames: ['id'],
                columnNames: ['post_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        ]
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.historyTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
