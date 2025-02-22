import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
//import { Perfil } from '@appModules/domain/entities/perfil.entity';
import { Perfil } from '../../domain/entities/perfil.entity';

//import { Helpers } from '@appModules/helpers/helpers';
import { Helpers } from '../../helpers/helpers';


//import { CreatePerfilDto } from '@appModules/application/dto/create-perfil.dto'
import { CreatePerfilDto } from '../../application/dto/create-perfil.dto'

//import { UpdatePerfilDto } from '@appModules/application/dto/update-perfil.dto'

//import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'
import { PerfilInterface } from '../../application/interfaces/perfil.interface'



@Injectable()
export class PerfilService {

  constructor(        
    @InjectRepository(Perfil)             
        private perfilRepository: Repository<Perfil>
) {
   
};

  //instanciar objeto da classe Helpers onde consigo obter algumas funções frequentemente utilizadas. 
  private helpers: Helpers = new Helpers();

  private perfil: Perfil;

  //Sempre podemos deixar um hello word de cada projeto.. rs
  getHello(): string {
    return 'End-point perfil';
  }

  public async create(createPerfilDto: CreatePerfilDto) {

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

        //Retornar a função funcReturnObject para um formato mais adequado para o FrontEnd sinalizando Sucesso ou Erro
        return this.helpers.funcReturnObject(savedEntity,undefined,`sucesso`);

    } catch (error) {

        return this.helpers.funcReturnObject(error,undefined,`Erro`);
    };

  };

  public async update(perfilInterface: PerfilInterface) {

    const cCd_perfil = perfilInterface.cd_perfil;

    delete perfilInterface['cd_perfil']; 

    try {
        const updateEntity = await this.perfilRepository.update(Number(cCd_perfil),perfilInterface);
        return this.helpers.funcReturnObject(updateEntity,undefined,`sucesso`);

    } catch (error) {
        return this.helpers.funcReturnObject(error,undefined,`Erro`);
    };

  };

  public async findAll(): Promise<[ ]> {        
    try{
      //Executando uma query personalizada
      const ret =  await this.perfilRepository.query(`select * from perfil`);        
      return this.helpers.funcReturnObject(ret,undefined,`sucesso`);
    }catch(error){     
        return this.helpers.funcReturnObject(error,undefined,`Erro`);
    };
  };

  public async find_nr_documento_pessoa(pNr_documento_pessoa:string): Promise<[ ]> {        
    try{
      const ret =  await this.perfilRepository.findOne({
        where: {
          nr_documento_pessoa: pNr_documento_pessoa
        }
      });
      return this.helpers.funcReturnObject(ret,undefined,`sucesso`);
    }catch(error){     
       return this.helpers.funcReturnObject(error,undefined,`Erro`);
    };
  };

  public async delete(perfilInterface: PerfilInterface) {

    console.log(perfilInterface.cd_perfil);

    try {
        const deleteEntity = await this.perfilRepository.delete(Number(perfilInterface.cd_perfil));
        return this.helpers.funcReturnObject(deleteEntity,undefined,`sucesso`);

    } catch (error) {
        return this.helpers.funcReturnObject(error,undefined,`Erro`);
    };

  };

}
