import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTableAddColumnCounterViewInPost1714932848799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('post', new TableColumn({
            name: 'counterViews',
            type: 'int',
            default: 0
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
