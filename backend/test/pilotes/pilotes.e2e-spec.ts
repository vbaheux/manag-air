import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { PilotesService } from '../../src/api/pilotes/pilotes.service';
import {
  PILOTE_1,
  PILOTE_1_DTO,
  PILOTE_1_WITH_VOLS,
  PILOTE_1_WITH_VOLS_DTO,
} from './pilotes.fixtures';

describe('PilotesController (e2e)', () => {
  let app: INestApplication;
  const pilotesService = {
    findAll: () => [PILOTE_1],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findById: (id: number) => PILOTE_1_WITH_VOLS,
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PilotesService)
      .useValue(pilotesService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/pilotes (GET)', () => {
    return request(app.getHttpServer())
      .get('/pilotes')
      .expect(200)
      .expect([PILOTE_1_DTO]);
  });

  it('/pilotes/id (GET)', () => {
    return request(app.getHttpServer())
      .get('/pilotes/1')
      .expect(200)
      .expect(PILOTE_1_WITH_VOLS_DTO);
  });

  afterAll(async () => {
    await app.close();
  });
});
