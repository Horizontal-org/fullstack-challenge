import {
  Controller,
  Post,
  Get,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import * as https from 'https';

@Controller('file')
export class UploadFileController {
  SERVER_URL = 'http://localhost:9000/';

  @Post('upload')
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
  async uploadImage(@UploadedFile() file) {
    const response = {
      fileURL: `${this.SERVER_URL}${file.filename}`,
      file: file,
    };
    return response;
  }

  @Get('save')
  async getFile(@Query() fileURL: any) {
    
    const saveImage = (url, path) => {
      const fullURL = url;
      const localPath = createWriteStream(path);
      const request = https.get(fullURL, function (response) {
        response.pipe(localPath);
      });
    };

    const { image } = fileURL;
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    const extensionName = extname(image);
    saveImage(image, './data/' + randomName + '.' + extensionName);
    const file = {
      imageURL: this.SERVER_URL + randomName + '.' + extensionName,
    };

    return file;
  }
}
