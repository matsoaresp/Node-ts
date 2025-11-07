import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1762437750065 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "user_id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                    },
                ],
            }),
        );

        // 🟢 Insere um usuário inicial (opcional)
        await queryRunner.query(`
            INSERT INTO "user" (user_id, name, email, password)
            VALUES ('1', 'Mateus', 'mateus@gmail.com', '123456');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }
}
