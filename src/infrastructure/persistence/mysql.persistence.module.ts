import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//import { Perfil } from '@appModules/domain/entities/perfil.entity'
import { Perfil } from '../../domain/entities/perfil.entity'

//import { PerfilService } from '@appModules/domain/services/perfil.services';
import { PerfilService } from '../../domain/services/perfil.services';

import { ConfigModule } from '@nestjs/config';

@Module
({
  imports: 
  [ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot
    ({
      type: 'mysql',
      host: process.env.MYSQLDB_HOST ?? 'localhost',      
      port: Number(process.env.MYSQLDB_PORT),      
      username: process.env.MYSQLDB_USERNAME,                 
      password: process.env.MYSQLDB_PASSWORD,
      database: process.env.MYSQLDB_DATABASE,      
      entities: [Perfil],
      synchronize: Boolean(process.env.MYSQLDB_SYNCRONIZE)
    }), 
    TypeOrmModule.forFeature([Perfil])
  ],    
  providers: [PerfilService],          
  exports: [PerfilService],    
})

export class MysqlPersistenceModule {}
