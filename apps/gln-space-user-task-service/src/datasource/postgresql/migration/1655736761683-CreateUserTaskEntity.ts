import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTaskEntity1655736761683 implements MigrationInterface {
  name = 'CreateUserTaskEntity1655736761683';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "example" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(50) NOT NULL, CONSTRAINT "PK_608dd5fd6f0783062b07346ed1c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "userTask" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "customerId" character varying(48) NOT NULL, "title" character varying(50) NOT NULL, "description" character varying(255), "startTime" TIMESTAMP WITH TIME ZONE NOT NULL, "endTime" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_0cbeb42d2b76a5c3e8a32d5af89" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "userTask"`);
    await queryRunner.query(`DROP TABLE "example"`);
  }
}
