import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { extname } from 'path';
import * as https from 'https';
import { FileEntity } from '../domain/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  SERVER_URL = 'http://localhost:9000/';

  async createFile(body: FileEntity) {
    const createdAt = new Date();
    body.createdAt = createdAt;
    return await this.fileRepository.save(body);
  }

  async listFiles(): Promise<FileEntity[]> {
    return await this.fileRepository.find();
  }

  async saveFile(fileURL: any): Promise<any> {
    const saveImage = (url: string, path: string) => {
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
    saveImage(image, './data/' + randomName + extensionName);

    const file = {
      imageURL: this.SERVER_URL + randomName + extensionName,
    };
    return file;
  }
}
