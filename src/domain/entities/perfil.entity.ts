import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Perfil {
    @PrimaryGeneratedColumn()
    cd_perfil: number

    @Column()
    tp_perfil: string

    @Column()
    tp_pessoa: string

    @Column()
    nr_documento_pessoa: string

    @Column()
    nr_cpf_responsavel: string

    @Column()
    nm_perfil: string

    @Column()
    nr_celular: string

    @Column()
    nr_telefone: string

    @Column()
    ds_email: string

    @Column()
    nr_cep: string

    @Column()
    ds_logradouro: string

    @Column()
    nr_logradouro: number

    @Column()
    ds_complemento: string

    @Column()
    nm_cidade: string

    @Column()
    nm_bairro: string

    @Column()
    tp_estados: string

}