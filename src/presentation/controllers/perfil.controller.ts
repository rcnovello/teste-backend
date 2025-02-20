import { Controller, Get, Post, Body, Query, Patch, Put, Delete } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

import { PerfilService } from '@appModules/domain/services/perfil.services';
import { CreatePerfilDto } from '@appModules/application/dto/create-perfil.dto'
import { UpdatePerfilDto } from '@appModules/application/dto/update-perfil.dto'
import { DeletePerfilDto } from '@appModules/application/dto/delete-perfil.dto'

import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'

import { Helpers } from '@appModules/helpers/helpers'

@Controller('perfil')
export class PerfilController {  

    constructor(
        //Classe de serviços Perfil
        private readonly perfilService: PerfilService        
    ) {}

    //Instanciar objetos
    private helpers: Helpers = new Helpers();   
    public  perfilInterface: PerfilInterface;

    //CRUD
    //Rota get buscar todos os perfis cadastrados
    @Get('/todos')
    findAll() {
      return this.perfilService.findAll();
    };
    
    //rota get buscar perfil unico por nr_documento_pessoa
    @Get()    
    find_nr_documento_pessoa(
      @Query('nr_documento_pessoa') pNr_documento_pessoa: string      
    ){        
        return this.perfilService.find_nr_documento_pessoa(pNr_documento_pessoa);
    };   

    //Rota para Cadastrar perfil
    @Post()
    create(@Body(new ValidationPipe()) createPerfilDto: CreatePerfilDto) {       
      return this.perfilService.create(createPerfilDto);
    };
    
    //rota update todos os dados
    @Put()
    update(@Body(new ValidationPipe()) createPerfilDto: CreatePerfilDto){
      return this.perfilService.update(createPerfilDto);
    };

    //rota update alguns campos
    @Patch()
    updatePerfil(@Body(new ValidationPipe()) updatePerfilDto: UpdatePerfilDto){
      return this.perfilService.update(updatePerfilDto);
    };
    

    //rota delete perfil
    @Delete()
    //remove(@Body('cd_perfil') cd_perfil: any) {  
    delete(@Body(new ValidationPipe()) deletePerfilDto: DeletePerfilDto){
      console.log(deletePerfilDto.cd_perfil);    
      return this.perfilService.delete(deletePerfilDto);
    };
  

    /*


  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.usersService.findOne(+id);
    }
  
    */


    @Get('/hello')
    getHello(): string {
      return this.helpers.funcReturnObject(this.perfilService.getHello(),undefined,'Application')
    };     

}
