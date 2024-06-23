import { Test, TestingModule } from '@nestjs/testing';
import { AvionsService } from '../avions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Avion } from '../entity/avion.entity';
import { Repository } from 'typeorm';
import { AVION_1 } from '../../../../test/avions/avions.fixtures';

describe('AvionsService', () => {
  let service: AvionsService;
  let repo: Repository<Avion>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AvionsService,
        {
          provide: getRepositoryToken(Avion),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<AvionsService>(AvionsService);
    repo = module.get<Repository<Avion>>(getRepositoryToken(Avion));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of planes', async () => {
      jest.spyOn(repo, 'find').mockResolvedValueOnce([AVION_1]);
      expect(await service.findAll()).toEqual([AVION_1]);
    });
  });

  describe('findById', () => {
    it('should return a plane', async () => {
      const createQueryBuilder: any = {
        leftJoinAndSelect: () => createQueryBuilder,
        where: () => createQueryBuilder,
        getOne: () => AVION_1,
      };

      jest
        .spyOn(repo, 'createQueryBuilder')
        .mockImplementation(() => createQueryBuilder);

      expect(await service.findById(AVION_1.numavion)).toEqual(AVION_1);
    });
  });
});
