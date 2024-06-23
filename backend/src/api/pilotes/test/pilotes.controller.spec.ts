import { Test, TestingModule } from '@nestjs/testing';
import { PilotesController } from '../pilotes.controller';
import { PilotesService } from '../pilotes.service';
import { Pilote } from '../entity/pilote.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  PILOTE_1,
  PILOTE_1_DTO,
} from '../../../../test/pilotes/pilotes.fixtures';

describe('PilotesController', () => {
  let controller: PilotesController;
  let service: PilotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PilotesController],
      providers: [
        PilotesService,
        {
          provide: getRepositoryToken(Pilote),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PilotesService>(PilotesService);
    controller = module.get<PilotesController>(PilotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of pilots', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValueOnce([PILOTE_1]);
      expect(await controller.findAll()).toEqual([PILOTE_1_DTO]);
    });
  });

  describe('findById', () => {
    it('should return an pilot', async () => {
      jest.spyOn(service, 'findById').mockResolvedValueOnce(PILOTE_1);
      expect(await controller.findById(PILOTE_1.numpilote)).toEqual(
        PILOTE_1_DTO,
      );
    });
  });
});
