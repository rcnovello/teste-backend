import { Controller, Get, Post, Body, Query, Patch, Put, Delete } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

//import { PerfilService } from '@appModules/domain/services/perfil.services';
import { PerfilService } from '../../domain/services/perfil.services';

//import { CreatePerfilDto } from '@appModules/application/dto/create-perfil.dto'
import { CreatePerfilDto } from '../../application/dto/create-perfil.dto'

//mport { UpdatePerfilDto } from '@appModules/application/dto/update-perfil.dto'
import { UpdatePerfilDto } from '../../application/dto/update-perfil.dto'

//import { DeletePerfilDto } from '@appModules/application/dto/delete-perfil.dto'
import { DeletePerfilDto } from '../../application/dto/delete-perfil.dto'

//import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'
import { PerfilInterface } from '../../application/interfaces/perfil.interface'

//import { Helpers } from '@appModules/helpers/helpers'
import { Helpers } from '../../helpers/helpers'


//@Controller('PerfilController')
@Controller('perfil')
export class PerfilController {  

    constructor(
        private readonly perfilService: PerfilService        
    ) {}

    private helpers: Helpers = new Helpers();   
    public  perfilInterface: PerfilInterface;

    @Get('/todos')
    async find_all() {
      const ret = await this.perfilService.findAll();      
      console.log(ret);
      return ret;      
    };
    
    @Get()    
    find_nr_documento_pessoa(
      @Query('nr_documento_pessoa') pNr_documento_pessoa: string      
    ){        
        return this.perfilService.find_nr_documento_pessoa(pNr_documento_pessoa);
    };   

    @Post()
    create(@Body(new ValidationPipe()) createPerfilDto: CreatePerfilDto) {       
      return this.perfilService.create(createPerfilDto);
    };
    
    @Put()
    update(@Body(new ValidationPipe()) createPerfilDto: CreatePerfilDto){
      return this.perfilService.update(createPerfilDto);
    };

    @Patch()
    updatePerfil(@Body(new ValidationPipe()) updatePerfilDto: UpdatePerfilDto){
      return this.perfilService.update(updatePerfilDto);
    };
    
    @Delete() 
    delete(@Body(new ValidationPipe()) deletePerfilDto: DeletePerfilDto){
      console.log(deletePerfilDto.cd_perfil);    
      return this.perfilService.delete(deletePerfilDto);
    };

    @Get('/hello')
    getHello(): string {
      //return this.helpers.funcReturnObject(this.perfilService.getHello(),undefined,'Application')
      return this.perfilService.getHello();
    };     

}
