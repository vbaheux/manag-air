import { Test, TestingModule } from '@nestjs/testing';
import { PilotesService } from '../pilotes.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pilote } from '../entity/pilote.entity';
import { Repository } from 'typeorm';
import { PILOTE_1 } from '../../../../test/pilotes/pilotes.fixtures';

describe('PilotesService', () => {
  let service: PilotesService;
  let repo: Repository<Pilote>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PilotesService,
        {
          provide: getRepositoryToken(Pilote),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PilotesService>(PilotesService);
    repo = module.get<Repository<Pilote>>(getRepositoryToken(Pilote));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of pilots', async () => {
      jest.spyOn(repo, 'find').mockResolvedValueOnce([PILOTE_1]);
      expect(await service.findAll()).toEqual([PILOTE_1]);
    });
  });

  describe('findById', () => {
    it('should return a pilot', async () => {
      const createQueryBuilder: any = {
        leftJoinAndSelect: () => createQueryBuilder,
        where: () => createQueryBuilder,
        getOne: () => PILOTE_1,
      };

      jest
        .spyOn(repo, 'createQueryBuilder')
        .mockImplementation(() => createQueryBuilder);

      expect(await service.findById(PILOTE_1.numpilote)).toEqual(PILOTE_1);
    });
  });
});
