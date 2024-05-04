import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserRoot1714854381224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('user')
            .values([
                { name: 'root', email: 'root@root.com'}
            ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
