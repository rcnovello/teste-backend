import { IsEmail, IsNotEmpty, IsOptional, MinLength,MaxLength } from 'class-validator';

export class UpdatePerfilDto {

    /*

    @IsOptional()
    tp_perfil: string

    @IsNotEmpty() 
    tp_pessoa: string

    @IsNotEmpty() 
    nr_documento_pessoa: string
    
    @IsNotEmpty() 
    nr_cpf_responsavel: string

    */

    

    @IsNotEmpty() 
    nm_perfil: string

    
    @IsNotEmpty() 
    nr_celular?: string      

    /*

    @IsNotEmpty() 
    nr_cep: string

    @IsNotEmpty() 
    ds_logradouro: string

    @IsNotEmpty() 
    nr_logradouro: number

    @IsNotEmpty() 
    ds_complemento: string

    @IsNotEmpty() 
    nm_cidade: string

    @IsNotEmpty() 
    nm_bairro: string

    @IsNotEmpty() 
    @MinLength(2)
    @MaxLength(2)
    tp_estado: string

    @IsEmail()
    @IsNotEmpty() 
    ds_email: string

    @IsOptional()    
    nr_telefone: string

    */

};