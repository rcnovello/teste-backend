import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Helpers } from '@appModules/helpers/helpers';

import { Perfil } from '@appModules/domain/entities/perfil.entity';
import { CreatePerfilDto } from '@appModules/application/dto/create-perfil.dto'

import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'



@Injectable()
export class PerfilService {

  constructor(        
    @InjectRepository(Perfil)             
        private perfilRepository: Repository<Perfil>
) {
   
};

  private helpers: Helpers = new Helpers();

  private perfil: Perfil;

  getHello(): string {
    return 'Rota perfil';
  }

  public async create(createPerfilDto: CreatePerfilDto) {
    //public async create(perfilInterface: PerfilInterface) {

    this.perfil = new Perfil();
    this.perfil.tp_perfil = createPerfilDto.tp_perfil;
    this.perfil.tp_pessoa = createPerfilDto.tp_pessoa;
    this.perfil.nr_documento_pessoa= createPerfilDto.nr_documento_pessoa;
    this.perfil.nr_cpf_responsavel = createPerfilDto.nr_cpf_responsavel;
    this.perfil.nm_perfil = createPerfilDto.nm_perfil;
    this.perfil.nr_celular = createPerfilDto.nr_celular;
    this.perfil.nr_cep = createPerfilDto.nr_cep;
    this.perfil.ds_logradouro = createPerfilDto.ds_logradouro;
    this.perfil.nr_logradouro = createPerfilDto.nr_logradouro;
    this.perfil.ds_complemento = createPerfilDto.ds_complemento;
    this.perfil.nm_cidade = createPerfilDto.nm_cidade;
    this.perfil.nm_bairro = createPerfilDto.nm_bairro;
    this.perfil.tp_estado = createPerfilDto.tp_estado;
    this.perfil.ds_email = createPerfilDto.ds_email;
    this.perfil.nr_telefone = createPerfilDto.nr_telefone;
    
          
    try {
        const savedEntity = await this.perfilRepository.save(this.perfil);
        //const savedEntity = await this.perfilRepository.save(perfilInterface);

        //console.log(savedEntity);
        //return savedEntity;     
        return this.helpers.funcReturnObject(savedEntity,undefined,`sucesso`);

    } catch (error) {
        //console.log(error);
        //throw this.helpers.handleError(error);
        return this.helpers.funcReturnObject(error,undefined,`Erro`);
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
