import { IsEmail, IsNotEmpty, IsOptional  } from 'class-validator';

export class CreatePerfilDto {

    @IsNotEmpty() 
    cd_perfil?: number
    tp_perfil?: string
    tp_pessoa?: string
    nr_documento_pessoa?: string
    nr_cpf_responsavel?: string
    nm_perfil?: string
    nr_celular?: string        
    nr_cep?: string
    ds_logradouro?: string
    nr_logradouro?: number
    ds_complemento?: string
    nm_cidade?: string
    nm_bairro?: string
    tp_estado?: string

    @IsEmail()
    @IsNotEmpty() 
    ds_email?: string

    @IsOptional()    
    nr_telefone?: string

};