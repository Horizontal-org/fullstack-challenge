import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from '../domain/file.entity';
import { FileService } from './file.service';

describe('FileService', () => {
  let fileService: FileService;
  let fileRepository: Repository<FileEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FileService,
        {
          provide: getRepositoryToken(FileEntity),
          useValue: {
            find: jest
              .fn()
              .mockResolvedValue([
                {
                  id: 1,
                  name: 'http://localhost:9000/d1c720bf541026bb8c3849a47276687fb..jpg',
                  createdAt: new Date(),
                },
              ]),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    fileService = module.get<FileService>(FileService);
    fileRepository = module.get<Repository<FileEntity>>(
      getRepositoryToken(FileEntity),
    );
  });

  it('should be defined', () => {
    expect(fileService).toBeDefined();
  });

  describe('createFile', () => {
    it('should create a file', async () => {
      const file = new FileEntity();
      file.name = 'http://localhost:9000/d1c720bf541026bb8c3849a47276687fb..jpg';
      file.createdAt = new Date();

      await fileService.createFile(file);

      expect(fileRepository.save).toBeCalledWith(file);
    });
  });

  describe('listFiles', () => {
    it('should return an array of files', async () => {
      const result: any = [
        {
          id: 1,
          name: 'http://localhost:9000/d1c720bf541026bb8c3849a47276687fb..jpg',
          createdAt: new Date(),
        },
      ];
      jest.spyOn(fileService, 'listFiles').mockImplementation(() => result);

      expect(await fileService.listFiles()).toBe(result);
    });
  });
});
