import { Controller, Get, Inject, ParseIntPipe, Query } from '@nestjs/common';

import { ReadFileDto } from '../dto/read.file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from '../domain/file.entity';
import { plainToClass } from 'class-transformer';


@Controller('file')
export class ListFileController {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  @Get('')
  async handler() {
    const users = await this.fileRepository.find(); 
    
    return users.map((user) => plainToClass(ReadFileDto, user))
  }
}
