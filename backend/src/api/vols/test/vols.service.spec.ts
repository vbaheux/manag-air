import { Test, TestingModule } from '@nestjs/testing';
import { VolsService } from '../vols.service';
import { Repository } from 'typeorm';
import { Vol } from '../entity/vol.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VOL_2, VOL_2_I_CREATE_DTO } from '../../../../test/vols/vols.fixtures';

describe('VolsService', () => {
  let service: VolsService;
  let repo: Repository<Vol>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VolsService,
        {
          provide: getRepositoryToken(Vol),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<VolsService>(VolsService);
    repo = module.get<Repository<Vol>>(getRepositoryToken(Vol));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createVol', () => {
    it('should return a plane', async () => {
      const createQueryBuilder: any = {
        leftJoinAndSelect: () => createQueryBuilder,
        where: () => createQueryBuilder,
        getOne: () => VOL_2,
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      jest.spyOn(repo, 'create').mockImplementation((vol) => VOL_2);
      jest.spyOn(repo, 'insert').mockImplementation(jest.fn());
      jest
        .spyOn(repo, 'createQueryBuilder')
        .mockImplementation(() => createQueryBuilder);
      expect(await service.createVol(VOL_2_I_CREATE_DTO)).toEqual(VOL_2);
    });
  });
});
