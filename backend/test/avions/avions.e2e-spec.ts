import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import {
  AVION_1,
  AVION_1_DTO,
  AVION_1_WITH_VOLS,
  AVION_1_WITH_VOLS_DTO,
} from './avions.fixtures';
import { AvionsService } from '../../src/api/avions/avions.service';

describe('AvionsController (e2e)', () => {
  let app: INestApplication;
  const avionsService = {
    findAll: () => [AVION_1],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findById: (id: number) => AVION_1_WITH_VOLS,
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AvionsService)
      .useValue(avionsService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/avions (GET)', () => {
    return request(app.getHttpServer())
      .get('/avions')
      .expect(200)
      .expect([AVION_1_DTO]);
  });

  it('/avions/id (GET)', () => {
    return request(app.getHttpServer())
      .get('/avions/1')
      .expect(200)
      .expect(AVION_1_WITH_VOLS_DTO);
  });

  afterAll(async () => {
    await app.close();
  });
});
