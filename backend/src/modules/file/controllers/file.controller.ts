import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { FileService } from '../services/file.service';
import { FileEntity } from '../domain/file.entity';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('')
  async createFile(@Body() body: FileEntity) {
    return await this.fileService.createFile(body);
  }

  @Get('')
  async listFiles(): Promise<any> {
    return await this.fileService.listFiles();
  }

  @Get('save')
  async saveFile(@Query() fileURL: any) {
    return await this.fileService.saveFile(fileURL);
  }
}
