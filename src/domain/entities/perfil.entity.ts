import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('perfil')
export class Perfil {

    @PrimaryGeneratedColumn()
    cd_perfil: number

    @Column({ type: 'varchar', length: 20 })
    tp_perfil: string /* É POSSÍVEL DEFINIR SE O PERFIL É COMPRADOR OU VENDEDOR NO MOMENTO DO CADASTRO, OU POSTERIORMENTE*/

    @Column({ type: 'varchar', length: 20, nullable: false })
    tp_pessoa: string /* PESSOA FÍSCIA OU JURÍDICA */

    @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
    nr_documento_pessoa: string /* NÚMERO DO CPF OU CNPJ DA PESSOA FÍSCIA OU JURÍDICA */
    /*@Unique("unique-nr_documento_pessoa", ["nr_documento_pessoa"])*/ /* PERMITE APENAS UMA PESSOA FISICA OU JURIDICA COM MESMO NÚMERO DE DOCUMENTO */

    @Column({ type: 'varchar', length: 20, nullable: false })
    nr_cpf_responsavel: string /* PERMITE SER RESPONSÁVEL POR UM PERFIL TIPO DE PESSOA PJ OU PESSOA FÍSICA */

    @Column({ type: 'varchar', length: 255, nullable: false })
    nm_perfil: string

    @Column({ type: 'varchar', length: 20, nullable: false })
    nr_celular: string

    @Column({ type: 'varchar', length: 20, nullable: true})
    nr_telefone: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    ds_email: string

    @Column({ type: 'varchar', length: 20, nullable: false })
    nr_cep: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    ds_logradouro: string

    @Column({ type: 'int', nullable: false })
    nr_logradouro: number

    @Column({ type: 'varchar', length: 255, nullable: false })
    ds_complemento: string

    @Column({ type: 'varchar', length: 100, nullable: false })
    nm_cidade: string

    @Column({ type: 'varchar', length: 100, nullable: false })
    nm_bairro: string

    @Column({ type: 'char', length: 2, nullable: false })
    tp_estado: string

}