import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmConfig } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileModule } from './modules/file/file.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...OrmConfig,
      autoLoadEntities: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'data'),
    }),
    FileModule
  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
