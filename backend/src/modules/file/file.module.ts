import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FileController } from './controllers/file.controller';
import { FileService } from './services/file.service';
import { FileEntity } from './domain/file.entity';

@Module({
  controllers: [FileController],
  providers: [FileService],
  imports: [TypeOrmModule.forFeature([FileEntity])],
})
export class FileModule {}
