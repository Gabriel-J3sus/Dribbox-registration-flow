import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1608658300108 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    //Realizar alterações

    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'email',
          type: 'string',
          isUnique: true, 
          isPrimary: true,
          isGenerated: false,
          generationStrategy: 'uuid'
        },

        {
          name: 'password',
          type: 'string', 
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //desfaz o método up

    await queryRunner.dropTable('users');
  }

}
