import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTableAddColumnLikeAndDislikeInPost1714932431644 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('post', new TableColumn({
            name: 'like',
            type: 'int',
            default: 0
        }))

        await queryRunner.addColumn('post', new TableColumn({
            name: 'dislike',
            type: 'int',
            default: 0
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
