import { IsEmail, IsNotEmpty, IsOptional, MinLength,MaxLength, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { PerfilInterface } from '@appModules/application/interfaces/perfil.interface'

export class UpdatePerfilDto implements PerfilInterface {
   

    @IsNotEmpty()
    @IsNumber()    
    @Type(() => Number)  
    cd_perfil: number

    @IsOptional()
    tp_perfil: string

    @IsOptional() 
    tp_pessoa: string
    
    @IsOptional() 
    nr_cpf_responsavel: string
    
    @IsOptional()
    @IsString()
    nm_perfil: string

    @IsOptional()
    @MinLength(9)
    nr_celular: string      

    @IsOptional() 
    nr_cep: string

    @IsOptional() 
    ds_logradouro: string

    @IsOptional() 
    nr_logradouro: number

    @IsOptional() 
    ds_complemento: string

    @IsOptional() 
    nm_cidade: string

    @IsOptional() 
    nm_bairro: string

    @IsOptional() 
    @MinLength(2)
    @MaxLength(2)
    tp_estado: string

    @IsOptional() 
    @IsEmail()
    ds_email: string

    @IsOptional()    
    nr_telefone: string

};