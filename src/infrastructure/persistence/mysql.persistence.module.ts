import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfil } from '@appModules/domain/entities/perfil.entity'

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.MYSQLDB_HOST,
        port: Number(process.env.MYSQLDB_MYSQLDB_PORT),
        username: process.env.MYSQLDB_USERNAME,
        password: process.env.MYSQLDB_PASSWORD,
        database: process.env.MYSQLDB_DATABASE,
        entities: [],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([
      Perfil])],    
  //providers: [TwygoIntegracaoService],          
  //exports: [TwygoIntegracaoService],    
  })

export class MysqlPersistenceModule {}
