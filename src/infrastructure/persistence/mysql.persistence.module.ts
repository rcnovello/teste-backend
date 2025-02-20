import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Perfil } from '@appModules/domain/entities/perfil.entity'
import { PerfilService } from '@appModules/domain/services/perfil.services';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.MYSQLDB_HOST,
        port: Number(process.env.MYSQLDB_MYSQLDB_PORT),
        username: 'root',       
        //username: String(process.env.MYSQLDB_USERNAME),       
        //password: String(process.env.MYSQLDB_PASSWORD),
        password: 'senha_root_123',
        //database: process.env.MYSQLDB_DATABASE,
        database: 'wefit',
        entities: [Perfil],
        synchronize: true}), //Lembrar de false quando produção
      TypeOrmModule.forFeature([Perfil])],    
  providers: [PerfilService],          
  exports: [PerfilService],    
  })

export class MysqlPersistenceModule {}
