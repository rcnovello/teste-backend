import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { ConfigModule } from '@nestjs/config';
import { MysqlPersistenceModule } from '../src/infrastructure/persistence/mysql.persistence.module'


describe('PerfilController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule,
        ConfigModule.forRoot({
          envFilePath: `${process.env.NODE_ENV}.env`
        }),
        MysqlPersistenceModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/perfil/hello (GET)', () => {
    return request(app.getHttpServer())
      .get('/perfil/hello')
      .expect(200)
      .expect('End-point perfil');
  });

});
