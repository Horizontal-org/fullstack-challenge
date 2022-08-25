import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export const OrmConfig: SqliteConnectionOptions = {
  type: 'sqlite',
  database: './db/challengeDb.sql',
  synchronize:  true,
  migrationsRun: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  entities: [__dirname + '/modules/**/domain/*.entity{.ts,.js}'],
};

export default OrmConfig;
