import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostFileService } from '../services/post.file.service';

@Controller('file')
export class PostFileController {
  SERVER_URL: string = 'http://localhost:9000/';
  constructor(private postFileService: PostFileService) {}

  @Post('')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './data',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadAvatar(@UploadedFile() file) {
    this.postFileService.create(`${this.SERVER_URL}${file.path}`);
  }
}
