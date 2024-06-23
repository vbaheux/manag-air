import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import * as request from 'supertest';
import {
  VOL_2,
  VOL_2_I_CREATE_DTO,
  VOL_2_O_CREATE_DTO,
  VOL_BAD_REQUEST_ERROR,
} from './vols.fixtures';
import { ICreateVolDto } from '../../src/api/vols/dto/ICreateVol.dto';
import { VolsService } from '../../src/api/vols/vols.service';

describe('VolsController (e2e)', () => {
  let app: INestApplication;
  const volsService = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findById: (id: number) => VOL_2,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createVol: (vol: ICreateVolDto) => VOL_2,
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(VolsService)
      .useValue(volsService)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  it('/vols (POST)', () => {
    return request(app.getHttpServer())
      .post('/vols')
      .send(VOL_2_I_CREATE_DTO)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.CREATED)
      .expect(VOL_2_O_CREATE_DTO);
  });

  it('/vols (POST) with bad request body', () => {
    return request(app.getHttpServer())
      .post('/vols')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.BAD_REQUEST)
      .expect(VOL_BAD_REQUEST_ERROR);
  });

  afterAll(async () => {
    await app.close();
  });
});
