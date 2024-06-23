import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TypeOrmHealthIndicator } from '@nestjs/terminus';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const typeOrmHealthIndicator = {
    pingCheck: () => {},
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(TypeOrmHealthIndicator)
      .useValue(typeOrmHealthIndicator)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect({ status: 'ok', info: {}, error: {}, details: {} });
  });

  afterAll(async () => {
    await app.close();
  });
});
