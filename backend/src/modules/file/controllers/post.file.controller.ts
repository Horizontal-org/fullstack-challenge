import { Controller, Post, Body } from '@nestjs/common';
import { PostFileService } from '../services/post.file.service';
import { FileEntity } from '../domain/file.entity';


@Controller('file')
export class PostFileController {
  constructor(private postFileService: PostFileService) {}

  @Post('')
  async create(@Body() body: FileEntity) {
    return await this.postFileService.create(body);
  }
}
