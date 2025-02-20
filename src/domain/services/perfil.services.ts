import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Helpers } from '@appModules/helpers/helpers';

import { Perfil } from '@appModules/domain/entities/perfil.entity';
import { CreatePerfilDto } from '@appModules/application/dto/create-perfil.dto'
import { UpdatePerfilDto } from '@appModules/application/dto/update-perfil.dto'

import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'



@Injectable()
export class PerfilService {

  constructor(        
    @InjectRepository(Perfil)             
        private perfilRepository: Repository<Perfil>
) {
   
};

  //instanciar objeto da classe Helpers onde consigo obter algumas funções frequentemente utilizadas. 
  private helpers: Helpers = new Helpers();

  //Instanciar objeto da classe Perfil para armazenar informações recebidas.
  private perfil: Perfil;


  //Sempre podemos deixar um hello word de cada projeto.. rs
  getHello(): string {
    return 'Rota perfil';
  }

  //Criar novo perfil
  public async create(createPerfilDto: CreatePerfilDto) {
    //Criar objeto Perfil após processado pelo ValidationPipe
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

        //Retornar a função funcReturnObject para um formato mais adequado para o FrontEnd sinalizando Sucesso ou Erro
        return this.helpers.funcReturnObject(error,undefined,`Erro`);
    };

  };

  //Criar novo perfil
  public async update(perfilInterface: PerfilInterface) {
    //public async update(updatePerfilDto: UpdatePerfilDto) {

    console.log(perfilInterface);

    //console.log(updatePerfilDto);

    return;

    //this.perfil = new Perfil();
    //this.perfil.cd_perfil = Number(perfilInterface.cd_perfil);
    //this.perfil.nm_perfil = String(perfilInterface.nm_perfil);

    //console.log(this.perfil);

    //return;
  
    try {
        //const updateEntity = await this.perfilRepository.update(Number(perfilInterface.cd_perfil),perfilInterface);

        //Retornar a função funcReturnObject para um formato mais adequado para o FrontEnd sinalizando Sucesso ou Erro
        //return this.helpers.funcReturnObject(updateEntity,undefined,`sucesso`);

    } catch (error) {

        //Retornar a função funcReturnObject para um formato mais adequado para o FrontEnd sinalizando Sucesso ou Erro
        return this.helpers.funcReturnObject(error,undefined,`Erro`);
    };

  };

  public async findAll(): Promise<[ ]> {        
    try{

      //Executando uma query personalizada
      const ret =  await this.perfilRepository.query(`select * from perfil`);        

      //Retornar a função funcReturnObject para um formato mais adequado para o FrontEnd sinalizando Sucesso ou Erro
      return this.helpers.funcReturnObject(ret,undefined,`sucesso`);

    }catch(error){     
       //Retornar a função funcReturnObject para um formato mais adequado para o FrontEnd sinalizando Sucesso ou Erro
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

}
