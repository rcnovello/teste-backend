CREATE TABLE Perfil (
    cd_perfil INT AUTO_INCREMENT PRIMARY KEY,
    tp_perfil VARCHAR(255) NOT NULL,
    tp_pessoa VARCHAR(255) NOT NULL,
    nr_documento_pessoa VARCHAR(255) NOT NULL,
    nr_cpf_responsavel VARCHAR(255) NOT NULL,
    nm_perfil VARCHAR(255) NOT NULL,
    nr_celular VARCHAR(255) NOT NULL,
    nr_telefone VARCHAR(255),
    ds_email VARCHAR(255) NOT NULL,
    nr_cep VARCHAR(255) NOT NULL,
    ds_logradouro VARCHAR(255) NOT NULL,
    nr_logradouro INT NOT NULL,
    ds_complemento VARCHAR(255) NOT NULL,
    nm_cidade VARCHAR(255) NOT NULL,
    nm_bairro VARCHAR(255) NOT NULL,
    tp_estado VARCHAR(255) NOT NULL
);
