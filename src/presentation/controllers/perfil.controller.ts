import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

import { PerfilService } from '@appModules/domain/services/perfil.services';
import { CreatePerfilDto } from '@appModules/application/dto/create-perfil.dto'
//import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'

import { Helpers } from '@appModules/helpers/helpers'

@Controller('perfil')
export class PerfilController {  

    constructor(
        private readonly perfilService: PerfilService
    ) {}

    private helpers: Helpers = new Helpers();   


    @Post()
    create(@Body(new ValidationPipe()) createPerfilDto: CreatePerfilDto) {       
      return this.perfilService.create(createPerfilDto);
    };
    
  
    @Get()
    findAll() {
      return this.perfilService.findAll();
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

      //return this.perfilService.getHello();
      return this.helpers.funcReturnObject(this.perfilService.getHello(),undefined,'Application')

    };

     

}
