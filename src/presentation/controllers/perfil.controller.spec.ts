import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { PerfilController } from '../../presentation/controllers/perfil.controller';
import { PerfilService } from '../../domain/services/perfil.services';

import { MysqlPersistenceModule } from '../../infrastructure/persistence/mysql.persistence.module'
import { PerfilInterface } from '../../application/interfaces/perfil.interface'


describe('PerfilController', () => {

  let perfilController: PerfilController;
  let perfilService: PerfilService;

  let perfilInterface: PerfilInterface

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
    it('should return "Rotas perfil"', () => {
      expect(perfilController.getHello()).toBe('Rotas perfil');
    });
  });

  /*
  describe('/todos', () => {
    it('Deve retornar um "array" padronizado no fomato json de dados perfís', async () => {      
      const result: { id: number; nome: string }[] = [{ id: 1, nome: 'Admin' }];
      const spy = jest.spyOn(perfilController, 'find_all').mockResolvedValue(result);
      console.log('teste');      
      console.log(result);
      expect(await perfilController.find_all()).toBe(result);
    });
  });
  */


  describe('/todos', () => {
    it('Deve retornar um "arra" padronizado no fomato json de dados perfís', async () => {
      let result = Promise['teste'];
      jest.spyOn(perfilService, 'findAll').mockImplementation(() => result);
      expect(await perfilController.find_all()).toBe(result);
    });
  });
  
});
