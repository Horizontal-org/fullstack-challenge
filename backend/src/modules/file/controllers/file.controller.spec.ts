import { Test, TestingModule } from '@nestjs/testing';
import { FileController } from './file.controller';
import { FileEntity } from '../domain/file.entity';
import { FileService } from '../services/file.service';

describe('FileController', () => {
  let controller: FileController;
  let service: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileController],
      providers: [
        {
          provide: FileService,
          useValue: {
            createFile: jest.fn(),
            listFiles: jest.fn().mockResolvedValue([
              {
                id: 1,
                name: 'http://localhost:9000/d1c720bf541026bb8c3849a47276687fb..jpg',
                createdAt: '31/10/2022, 12:51:06',
              },
            ]),
            saveFile: jest.fn().mockResolvedValue({
              imageURL:
                'http://localhost:9000/97f4ac273104bf126ebad106fd9fe5c370.jpeg',
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<FileController>(FileController);
    service = module.get<FileService>(FileService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createFile', () => {
    it('should create a file', async () => {
      const file = new FileEntity();
      file.name =
        'http://localhost:9000/d1c720bf541026bb8c3849a47276687fb..jpg';
      file.createdAt = new Date();

      await controller.createFile(file);

      expect(service.createFile).toBeCalledWith(file);
    });
  });

  describe('listFiles', () => {
    it('should return an array of files', async () => {
      await expect(controller.listFiles()).resolves.toEqual([
        {
          id: 1,
          name: 'http://localhost:9000/d1c720bf541026bb8c3849a47276687fb..jpg',
          createdAt: '31/10/2022, 12:51:06',
        },
      ]);
    });
  });

  describe('saveFile', () => {
    it('should save a file', async () => {
      const fileURL = {
        image:
          'https://images.pexels.com/photos/13377187/pexels-photo-13377187.jpeg',
      };

      await expect(controller.saveFile(fileURL)).resolves.toEqual({
        imageURL:
          'http://localhost:9000/97f4ac273104bf126ebad106fd9fe5c370.jpeg',
      });
    });
  });
});
