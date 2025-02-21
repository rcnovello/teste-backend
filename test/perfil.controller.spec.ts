import { Test, TestingModule } from '@nestjs/testing';
import { PerfilController } from '@appModules/presentation/controllers/perfil.controller';
import { PerfilService } from '@appModules/domain/services/perfil.services';

describe('PerfilController', () => {
  let perfilController: PerfilController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PerfilController],
      providers: [PerfilService],
    }).compile();

    perfilController = app.get<PerfilController>(PerfilController);
  });

  describe('root', () => {
    it('should return "Rotas perfil"', () => {
      expect(perfilController.getHello()).toBe('Rotas perfil');
    });
  });
});
