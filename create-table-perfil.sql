CREATE TABLE perfil (
    cd_perfil INT AUTO_INCREMENT PRIMARY KEY,
    tp_perfil VARCHAR(20) NOT NULL,
    tp_pessoa VARCHAR(20) NOT NULL,
    nr_documento_pessoa VARCHAR(20) UNIQUE NOT NULL, /* PERMITE APENAS UMA PESSOA FISICA OU JURIDICA COM MESMO NÚMERO DE DOCUMENTO */
    nr_cpf_responsavel VARCHAR(20) NOT NULL, /* PERMITE SER RESPONSÁVEL POR UM PERFIL TIPO DE PESSOA PJ OU PESSOA FÍSICA */
    nm_perfil VARCHAR(255) NOT NULL,
    nr_celular VARCHAR(20) NOT NULL,
    nr_telefone VARCHAR(20),
    ds_email VARCHAR(255) NOT NULL,
    nr_cep VARCHAR(20) NOT NULL,
    ds_logradouro VARCHAR(255) NOT NULL,
    nr_logradouro INT NOT NULL,
    ds_complemento VARCHAR(255) NOT NULL,
    nm_cidade VARCHAR(100) NOT NULL,
    nm_bairro VARCHAR(100) NOT NULL,
    tp_estado CHAR(2) NOT NULL
);
