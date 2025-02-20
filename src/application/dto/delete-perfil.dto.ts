import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'

export class DeletePerfilDto implements PerfilInterface {   

    @IsNotEmpty()
    @IsNumber()    
    @Type(() => Number)  
    cd_perfil: number

};