import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from '../domain/file.entity';

@Injectable()
export class PostFileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {}

  async create(body: any) {
    // const createdAt = new Date(÷
    return await this.fileRepository.save(body);
  }
}
