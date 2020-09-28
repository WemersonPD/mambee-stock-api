import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mambeeuser',
  password: 'mambeepassword',
  database: 'mambee-stock',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
