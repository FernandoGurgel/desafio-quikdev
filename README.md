# Quikdev - Desafio Backend

Esse projeto tem como objetivo mostrar meus conhecimentos com a tecnoliga node e seu framework para a empresa quikdev.

## Pré-requisitos

![Node.js Version](https://img.shields.io/badge/node-v18.16.0-brightgreen)
![Docker Version](https://img.shields.io/badge/docker-v20.10.23-blue)

## Instalação do ambiente de dev

1. Clone o repositório
  ```sh
  git clone https://github.com/FernandoGurgel/desafio-quikdev.git
  ```
2. Instale as dependências
  ```sh
  npm install
  ```
3. Rodar o docker-compose para criar o banco de dados
  ```sh
  docker-compose up -d -f docker-compose-db.yml
  ```

## Uso local 

1. Execute o projeto
  ```sh
  npm start
  ```
2. Acesse o projeto no navegador
  ```
  http://localhost:3000/swagger
  ```

## Uso com Docker

1. Execute o projeto
  ```sh
  docker-compose up -d -f docker-compose-ambiente.yml
  ```
2. Acesse o projeto no navegador
  ```
  http://localhost/swagger
  ```

## Licença

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)