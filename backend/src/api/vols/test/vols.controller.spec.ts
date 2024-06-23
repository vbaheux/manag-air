import { Test, TestingModule } from '@nestjs/testing';
import { VolsController } from '../vols.controller';
import { VolsService } from '../vols.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  VOL_2,
  VOL_2_I_CREATE_DTO,
  VOL_2_O_CREATE_DTO,
} from '../../../../test/vols/vols.fixtures';
import { Vol } from '../entity/vol.entity';

describe('VolsController', () => {
  let controller: VolsController;
  let service: VolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolsController],
      providers: [
        VolsService,
        {
          provide: getRepositoryToken(Vol),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<VolsService>(VolsService);
    controller = module.get<VolsController>(VolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createVol', () => {
    it('should return a flight', async () => {
      jest.spyOn(service, 'createVol').mockResolvedValueOnce(VOL_2);
      expect(await controller.createVol(VOL_2_I_CREATE_DTO)).toEqual(
        VOL_2_O_CREATE_DTO,
      );
    });
  });
});
