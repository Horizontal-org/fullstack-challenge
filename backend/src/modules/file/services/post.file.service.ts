import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from '../domain/file.entity';

@Injectable()
export class PostFileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  async create(body: FileEntity) {
    const createdAt = new Date();
    body.createdAt = createdAt;
    return await this.fileRepository.save(body);
  }
}