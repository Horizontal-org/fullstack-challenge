
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListFileController } from './controllers/list.file.controller';
import { PostFileController } from './controllers/post.file.controller';
import { FileEntity } from './domain/file.entity';
import { PostFileService } from './services/post.file.service';

@Module({
  controllers: [ListFileController, PostFileController],
  providers: [PostFileService],
  imports: [TypeOrmModule.forFeature([FileEntity])]
})

export class FileModule {}