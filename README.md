A aplicação consome uma API externa de metadados de filmes, transforma as informações recebidas e disponibiliza os resultados por meio de um endpoint HTTP.

Funcionalidades

Consumo de dados de uma API externa.

Cálculo do lucro dos filmes a partir da bilheteria e do orçamento.

Identificação da premiação de maior relevância.

Conversão da duração dos filmes de minutos para segundos.

Extração da nota do IMDb.

Seleção da sinopse com prioridade para português (pt-br), inglês (en) e, por último, qualquer idioma disponível.

Remoção de campos desnecessários da resposta final.

Documentação interativa da API com Swagger UI.

Tecnologias utilizadas

Node.js

TypeScript

Express

Axios

Swagger / OpenAPI

swagger-jsdoc

swagger-ui-express

Endpoint

GET /filmes

Retorna a lista de filmes com os dados transformados.

Exemplo de resposta:

[
{
"titulo": "O Poderoso Chefão",
"ano": 1972,
"diretor": "Francis Ford Coppola",
"genero": ["Crime", "Drama"],
"duracaoSegundos": 10500,
"notaIMDb": "9.2",
"lucro": "$239M",
"maiorPremiacao": "Oscar de Melhor Filme",
"sinopse": "Um chefão da máfia tenta transferir o controle de seu império clandestino para seu filho relutante."
}
]

A resposta completa contém os filmes disponibilizados pela API de origem.

Documentação interativa

Com a aplicação em execução, acesse:

http://localhost:3000/api-docs

Caso a aplicação esteja configurada para utilizar outra porta, substitua 3000 pela porta correspondente.

Configuração e execução

Pré-requisitos

Node.js instalado.

npm instalado.

Acesso à API externa de metadados dos filmes.

1. Clone o repositório

git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>

2. Instale as dependências

npm install

3. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto e configure a URL da API externa:

URL*MOVIES=<URL_DA_API_EXTERNA>
PORT_SERVER=<SUA_PORTA*>

4. Inicie a aplicação

Execute o script de desenvolvimento ou inicialização definido no package.json.

Por exemplo, se o projeto possuir o script dev:

npm run dev ou npm start

5. Acesse a API

Faça uma requisição GET para:

http://localhost:3000/filmes

Para consultar a documentação, acesse:

http://localhost:3000/api-docs

Licença

Projeto desenvolvido para fins de avaliação técnica no processo seletivo da Overlabs.
