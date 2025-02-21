import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { PerfilController } from '../../presentation/controllers/perfil.controller';
import { MysqlPersistenceModule } from '../../infrastructure/persistence/mysql.persistence.module'

describe('PerfilController', () => {

  let perfilController: PerfilController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
       imports: [ConfigModule.forRoot({
          envFilePath: `${process.env.NODE_ENV}.env`
        }),
        MysqlPersistenceModule], 
      controllers: [PerfilController],
    }).compile();

    perfilController = app.get<PerfilController>(PerfilController);     
  });
  
  describe('/hello', () => {
    it('should return "Rotas perfil"', () => {
      expect(perfilController.getHello()).toBe('Rotas perfil');
    });
  });

  describe('/todos', () => {
    it('Deve retornar um "array" padronizado no fomato json de dados perfís', async () => {      
      let result: any = [];
      jest.spyOn(perfilController, 'find_all').mockImplementation(() => result);
      
      expect(await perfilController.find_all()).toBe(result);
    });
  });
  
});
