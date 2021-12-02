-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fk_aquario INT
);


/* para workbench - local - desenvolvimento */
create database heroes;
use heroes;
CREATE DATABASE heroes;

USE heroes;

	create table usuario(
	idUsuario int primary key auto_increment,
	nome varchar(45),
	sobrenome varchar(45),
	nome_heroi varchar(30),
	dtNascimento date,
	sexo char(1),
	check (sexo = 'm' or sexo = 'f' or sexo = 'p'),
	email varchar(100),
	senha varchar(100),
)auto_increment = 1000;

create table Atividades(
idAtividade int primary key auto_increment,
nome_atividade varchar(45),
descricao varchar(200),
categoria varchar(20),
pontos_atividade int
);

create table Historico(
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
fkAtividade int,
foreign key (fkAtividade) references Atividades(idAtividade),
data_finalizada date,
pontos_usuario int
);
