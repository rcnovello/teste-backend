import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

import { PerfilService } from '@appModules/domain/services/perfil.services';
import { CreatePerfilDto } from '@appModules/application/dto/create-perfil.dto'
import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'

import { Helpers } from '@appModules/helpers/helpers'

@Controller('perfil')
export class PerfilController {  

    constructor(
        //Classe de serviços de Perfil
        private readonly perfilService: PerfilService
    ) {}

    //Instanciar objetos
    private helpers: Helpers = new Helpers();   
    private perfilInterface: PerfilInterface;

    //Rota para Cadastrar perfil
    @Post()
    create(@Body(new ValidationPipe()) createPerfilDto: CreatePerfilDto) {       
      return this.perfilService.create(createPerfilDto);
    };
    
  
    //Rota get buscar todos os perfis cadastrados
    @Get('/todos')
    findAll() {
      return this.perfilService.findAll();
    };
    


    //rota get buscar perfil unico por nr_documento_pessoa
    @Get()
    async find_nr_documento_pessoa(
      @Query('nr_documento_pessoa') pNr_documento_pessoa: any
    ){  
        this.perfilInterface = { nr_documento_pessoa: pNr_documento_pessoa };
        return this.perfilService.find_nr_documento_pessoa(this.perfilInterface.nr_documento_pessoa);
    };   
  

    /*

    @Put(':id')
    async update(@Param(':id')id: number, @Body() user: User){
      return await this.userService.update(id, user);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.usersService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(+id, updateUserDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.usersService.remove(+id);
    }
    
    */


    @Get('/hello')
    getHello(): string {
      return this.helpers.funcReturnObject(this.perfilService.getHello(),undefined,'Application')
    };     

}
