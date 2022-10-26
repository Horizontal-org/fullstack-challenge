import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListFileController } from './controllers/list.file.controller';
import { UploadFileController } from './controllers/upload.file.controller';
import { PostFileController } from './controllers/post.file.controller';
import { PostFileService } from './services/post.file.service';
import { FileEntity } from './domain/file.entity';

@Module({
  controllers: [ListFileController, UploadFileController, PostFileController],
  providers: [PostFileService],
  imports: [TypeOrmModule.forFeature([FileEntity])],
})
export class FileModule {}
