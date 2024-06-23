import { Test, TestingModule } from '@nestjs/testing';
import { AvionsController } from '../avions.controller';
import { Avion } from '../entity/avion.entity';
import { AvionsService } from '../avions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AVION_1, AVION_1_DTO } from '../../../../test/avions/avions.fixtures';

describe('AvionsController', () => {
  let controller: AvionsController;
  let service: AvionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvionsController],
      providers: [
        AvionsService,
        {
          provide: getRepositoryToken(Avion),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<AvionsService>(AvionsService);
    controller = module.get<AvionsController>(AvionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of planes', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValueOnce([AVION_1]);
      expect(await controller.findAll()).toEqual([AVION_1_DTO]);
    });
  });

  describe('findById', () => {
    it('should return a plane', async () => {
      jest.spyOn(service, 'findById').mockResolvedValueOnce(AVION_1);
      expect(await controller.findById(AVION_1.numavion)).toEqual(AVION_1_DTO);
    });
  });
});
