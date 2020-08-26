# README


Esta é uma API REST de Star Wars feita em Node JS usando Express e Mongoose. Através desta API é possível rodar um seed para o Banco de Dados com as informações de planetas existentes na https://swapi.dev, assim como buscar planetas por nome, id, criar novos planetas e deletar planetas já existentes.


### Instalação


O primeiro passo a ser tomado é instalar o Node Js, em https://nodejs.org. 


Após clonar o repositório, rode `yarn` no terminal para instalar as dependências do projeto. Se ainda não tiver yarn instalado, o tutorial de instalação pode ser encontrado em https://yarnpkg.com.


Caso não tenha o MongoDB instalado em seu computador, siga o passo a passo em https://mongodb.com. Para visualização dos dados, pode ser utilizado uma ferramenta gráfica como o NoSQLBooster, que pode ser baixado em https://nosqlbooster.com/downloads.


### Como utilizar a API


Para rodar as requisições da API, é necessário uma plataforma cliente que faça as requisições REST, como o Insomnia ou o Postman. As rotas desta api começam com http://localhost:3333/planeta/.


Para popular o banco de dados, rode o código abaixo no terminal dentro da pasta raiz do projeto.

```
node src/database/seedDatabase.js
```

Antes de fazer as requisições através do cliente de API REST, rode o código abaixo no terminal na pasta raiz do projeto

```
node src/index.js
```


### Visualizando o funcionamento da API

Utilizando seu cliente de API REST, crie requisições para cada cada um dos métodos a serem testados.

Para listar todos os planetas que estão em seu BD, crie e envie uma requisição GET com o endereço 
```
http://localhost:3333/planeta/list/
```

Para listar um planeta específico, pegue o ID gerado pelo Mongo, crie e envie uma requisição GET com o endereço abaixo, acrescentando o id ao final
```
http://localhost:3333/planeta/find/
```

Para buscar um planeta pelo seu nome, crie e envie uma requisição GET com o endereço abaixo, acrescentando o nome completo do planeta buscado ao final
```
http://localhost:3333/planeta/search/
```

Para deletar um planeta, pegue o ID gerado pelo Mongo, crie e envie uma requisição DELETE com o endereço abaixo, acrescentando o id ao final
```
http://localhost:3333/planeta/delete/
```

Para criar um planeta novo, crie e envie uma requisição POST passando um arquivo JSON no Body da requisição com os campos "nome", "clima", "terreno" e "aparicoesFilmes" preenchidos. Caso um dos campos não esteja preenchido ou o nome esteja repetido, o validator não permitirá sua requisição.
```
http://localhost:3333/planeta/create
```