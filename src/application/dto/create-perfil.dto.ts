import { IsEmail, IsNotEmpty, IsOptional  } from 'class-validator';

export class CreatePerfilDto {

    @IsNotEmpty() 
    tp_perfil: string

    @IsNotEmpty() 
    tp_pessoa: string
    @IsNotEmpty() 
    nr_documento_pessoa: string
    @IsNotEmpty() 
    nr_cpf_responsavel: string
    @IsNotEmpty() 
    nm_perfil: string
    @IsNotEmpty() 
    nr_celular: string        
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
    tp_estado: string

    @IsEmail()
    @IsNotEmpty() 
    ds_email: string

    @IsOptional()    
    nr_telefone: string

};