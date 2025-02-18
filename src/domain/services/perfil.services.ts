import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Helpers } from '@appModules/helpers/helpers';

import { Perfil } from '@appModules/domain/entities/perfil.entity';
import { CreatePerfilDto } from '@appModules/application/dto/create-perfil.dto'



@Injectable()
export class PerfilService {

  constructor(        
    @InjectRepository(Perfil)             
        private perfilRepository: Repository<Perfil>
) {
   
};

  private helpers: Helpers = new Helpers();

  getHello(): string {
    return 'Rota perfil';
  }

  public async insertPerfil(createPerfilDto: CreatePerfilDto) {

    console.log('teste 2',createPerfilDto)

    return;
                      
    /*
    const validationPipe = new ValidationPipe({
         whitelist: true // Remove propriedades não definidas no DTO
        ,forbidNonWhitelisted: true // Lança erro se houver propriedades não permitidas
        ,transform: true // Converte automaticamente os tipos dos dados
    });
    */
           
    try {
      /*

        let twygoIntegracao = new TwygoIntegracao();
        try{
            const validatedData = await validationPipe.transform(
                insertTwygoIntegracaoDTO, 
                { type: 'body', metatype: InsertTwygoIntegracaoDto, data: '' }
            );
            
            twygoIntegracao.status = validatedData.status;                
            twygoIntegracao.data_envio = validatedData.data_envio;
            twygoIntegracao.dados_api = validatedData.dados_api;
            twygoIntegracao.retorno_api = validatedData.retorno_api;
            twygoIntegracao.jwt = validatedData.jwt;
        }catch(error){            
            throw this.helpers.handleError({response:error.response});
            //console.log({response:error.response})
        };
        */
        

        const savedEntity = await this.perfilRepository.save(createPerfilDto);
        return savedEntity;     

    } catch (error) {
        //console.log(error);
        throw this.helpers.handleError(error);
    };

  };

  public async findAll(): Promise<[ ]> {        
    try{
        //let vPk: TwygoIntegracaoInterface = { pk: 1};
        //console.log(vPk);
        //Enviar todos os funcionarios ativos

        //this.create();

        const ret =  this.perfilRepository.query(`select * from perfil`);
        return ret;

    }catch(error){     
       throw this.helpers.handleError(error);
    };
};

}
