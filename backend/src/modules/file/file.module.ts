
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListFileController } from './controllers/list.file.controller';
import { FileEntity } from './domain/file.entity';

@Module({
  controllers: [ListFileController],
  imports: [TypeOrmModule.forFeature([FileEntity])]
})

export class FileModule {}