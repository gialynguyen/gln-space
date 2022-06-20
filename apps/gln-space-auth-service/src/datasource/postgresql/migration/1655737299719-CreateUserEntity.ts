import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserEntity1655737299719 implements MigrationInterface {
  name = 'CreateUserEntity1655737299719';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fisrtName" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, "password" text NOT NULL, "email" text NOT NULL, "phone" character varying, "status" integer NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
