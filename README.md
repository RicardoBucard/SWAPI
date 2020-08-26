# README


Esta é uma API REST de Star Wars feita em Node JS usando Express e Mongoose. Através desta API é possível rodar um seed para o Banco de Dados com as informações de planetas existentes na https://swapi.dev, assim como buscar planetas por nome, id, criar novos planetas e deletar planetas já existentes.


### Instalação


O primeiro passo a ser tomado é instalar o Node Js, em https://nodejs.org. 


Após clonar o repositório, rode `yarn` no terminal para instalar as dependências do projeto. Se ainda não tiver yarn instalado, o tutorial de instalação pode ser encontrado em https://yarnpkg.com.


Caso não tenha o MongoDB instalado em seu computador, siga o passo a passo em https://mongodb.com. Para visualização dos dados, pode ser utilizado uma ferramenta gráfica como o NoSQLBooster, que pode ser baixado em https://nosqlbooster.com/downloads.


### Como utilizar a API


Para rodar as requisições da API, é necessário uma plataforma cliente que faça as requisições REST, como o Insomnia ou o Postman. As rotas desta api começam com http://localhost:3333/planet/.


Para popular o banco de dados, rode o código abaixo no terminal dentro da pasta raiz do projeto.

```
node src/database/seedDatabase.js
```

Antes de fazer as requisições através do cliente de API REST, rode o código abaixo no terminal na pasta raiz do projeto

```
node src/index.js
```