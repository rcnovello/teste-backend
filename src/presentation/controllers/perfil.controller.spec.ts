import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { PerfilController } from '../../presentation/controllers/perfil.controller';
import { PerfilService } from '../../domain/services/perfil.services';

import { MysqlPersistenceModule } from '../../infrastructure/persistence/mysql.persistence.module'


describe('PerfilController', () => {

  let perfilController: PerfilController;
  let perfilService: PerfilService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
       imports: [ConfigModule.forRoot({
          envFilePath: `${process.env.NODE_ENV}.env`
        }),
        MysqlPersistenceModule], 
      controllers: [PerfilController],
    }).compile();

    perfilController = app.get<PerfilController>(PerfilController);  
    perfilService = app.get<PerfilService>(PerfilService);    
  });
  
  describe('/hello', () => {
    it('should return "End-point perfil"', () => {
      expect(perfilController.getHello()).toBe('End-point perfil');
    });
  });

  
  describe('/todos', () => {
    it('Deve retornar um array padronizado no fomato json de dados perfís', async () => {
      let result = Promise['teste'];
      jest.spyOn(perfilService, 'findAll').mockImplementation(() => result);
      expect(await perfilController.find_all()).toBe(result);
    });
  });
  
});
