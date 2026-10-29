API REST desenvolvida com **Node.js, TypeScript e Express** para consumir dados de uma API externa de filmes, processar suas informações e disponibilizar uma resposta estruturada por meio de um endpoint HTTP.

## Funcionalidades

- **Consumo de API externa:** consulta os metadados dos filmes disponibilizados pela API de origem.
- **Cálculo de lucro:** calcula a diferença entre a bilheteria e o orçamento de cada filme.
- **Identificação de premiações:** seleciona a premiação com maior relevância.
- **Conversão de duração:** transforma a duração dos filmes de minutos para segundos.
- **Extração da nota do IMDb:** identifica a avaliação correspondente à fonte IMDb.
- **Seleção de sinopse:** prioriza os idiomas português (`pt-br`), inglês (`en`) e, por último, qualquer idioma disponível.
- **Tratamento da resposta:** remove campos desnecessários e retorna apenas as informações previstas.
- **Documentação interativa:** disponibiliza a especificação da API por meio do Swagger UI.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/) 
- [TypeScript](https://www.typescriptlang.org/) 
- [Express](https://expressjs.com/) 
- [Axios](https://axios-http.com/) 
- [Swagger / OpenAPI](https://swagger.io/) 
- `swagger-jsdoc` — geração da especificação OpenAPI a partir de anotações.
- `swagger-ui-express` — disponibilização da documentação interativa.

## Endpoint

### `GET /filmes`

Retorna a lista de filmes com os dados transformados pela aplicação.

**Exemplo de resposta:**

```json
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
```
O exemplo apresenta um único filme para facilitar a visualização. A resposta completa contém os filmes disponibilizados pela API de origem.

### Teste da API no Postman

A imagem abaixo demonstra a resposta da requisição `GET /filmes` no Postman.

<img width="977" height="698" alt="Resposta da API no Postman" src="https://github.com/user-attachments/assets/21052f64-7327-41ff-81ee-e752f5d8ee98" />

## Documentação interativa

A documentação interativa permite visualizar o endpoint e consultar o formato da resposta da API.

<img width="1093" height="713" alt="Documentação da API no Swagger UI" src="https://github.com/user-attachments/assets/938e05ff-4dc7-4628-a5f9-ce126dab6e54" />

A aplicação utiliza Swagger UI para apresentar os endpoints, os formatos das respostas e as informações documentadas sobre a API.

Com o servidor em execução, acesse:

**http://localhost:3000/api-docs**

Caso a aplicação utilize outra porta, substitua `3000` pela porta configurada.

## Configuração e execução

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Acesso à API externa de metadados dos filmes.

### 1. Clone o repositório

```bash
git clone (https://github.com/CodIguinhoDev/overlabs-movie-api)
cd <overlabs-movie-api>
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
URL_MOVIES=<URL_DA_API_EXTERNA>
PORT_SERVER=<SUA_PORTA_>
```

Substitua `<URL_DA_API_EXTERNA>` pelo endereço da API de origem. Ajuste a porta conforme a configuração utilizada pelo projeto.

### 4. Inicie a aplicação

Execute o script disponível no `package.json`. Por exemplo, se o projeto possuir o script `dev`:

```bash
npm run dev
```

Se houver um script de inicialização `start` configurado, ele também poderá ser utilizado conforme a configuração do projeto:

```bash
npm start
```

### 5. Acesse a API

Com o servidor em execução, faça uma requisição HTTP `GET` para:

```text
http://localhost:3000/filmes
```

Para consultar a documentação interativa:

```text
http://localhost:3000/api-docs
```
