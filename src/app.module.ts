import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { PerfilController } from '@appModules/presentation/controllers/perfil.controller'
import { PerfilService } from '@appModules/domain/services/perfil.services'

import { MysqlPersistenceModule } from '@appModules/infrastructure/persistence/mysql.persistence.module'

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `${process.env.NODE_ENV}`
  }),
  MysqlPersistenceModule],
  //controllers: [AppController],
  controllers: [PerfilController],
  //providers: [AppService],
  //providers: [PerfilService],
})
export class AppModule {}
