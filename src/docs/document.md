# Documentação do Desenvolvimento

## 1. Objetivo

O objetivo deste projeto é desenvolver uma API REST em Node.js e TypeScript capaz de consumir dados de uma API externa de filmes, transformar as informações recebidas e disponibilizar uma resposta estruturada por meio do endpoint `GET /filmes`.

## 2. Etapas do desenvolvimento

### 2.1. Análise dos requisitos

A primeira etapa consistiu em compreender os dados disponibilizados pela API externa e identificar as transformações necessárias para atender ao desafio.

Foram identificados os seguintes requisitos:

- Disponibilizar uma rota `GET /filmes`.
- Consumir os dados de uma API externa.
- Calcular o lucro dos filmes.
- Identificar a premiação com maior relevância.
- Converter a duração para segundos.
- Extrair a nota do IMDb.
- Selecionar a sinopse de acordo com a prioridade de idioma.
- Remover os campos `locacoes`, `poster` e `trailer`.

### 2.2. Organização do código

O projeto foi organizado para separar as responsabilidades da aplicação.

- **Routes:** definição das rotas HTTP.
- **Controllers:** recebimento das requisições e envio das respostas.
- **Services:** comunicação com a API externa e coordenação do processamento dos dados.
- **Utils:** funções auxiliares responsáveis pelas transformações e pelos cálculos.
- **Types:** definição das interfaces TypeScript utilizadas para representar os dados originais e transformados.
- **Config:** configuração da documentação Swagger.
- **Errors:** definição e organização das classes ou estruturas responsáveis pelo tratamento de erros da aplicação.
- **Constants:** centralização de valores constantes utilizados em diferentes partes do projeto, evitando a repetição de valores fixos no código.
- **Docs:** armazenamento da documentação do projeto, incluindo os documentos relacionados ao desenvolvimento e à utilização da API.

### 2.3. Consumo da API externa

A aplicação utiliza uma URL configurada por meio da variável de ambiente `URL_MOVIES`.

A requisição externa é realizada pelo serviço, que obtém a lista de filmes e encaminha cada item para o processo de transformação.

A URL é mantida na configuração do ambiente para evitar que o endereço da API fique diretamente acoplado à lógica de transformação.

### 2.4. Transformação dos dados

Cada filme é processado para produzir um objeto com os campos definidos pelo desafio.

#### Cálculo do lucro

O lucro é calculado subtraindo o orçamento da bilheteria:

`lucro = bilheteria - orçamento`

Como os valores originais são representados por strings com símbolos monetários e unidades como milhões ou bilhões, foi implementada uma etapa de conversão para valores numéricos antes do cálculo. O resultado é posteriormente formatado como string monetária compacta.

#### Identificação da maior premiação

A função responsável pelas premiações percorre a lista e compara a propriedade `relevancia`, selecionando o objeto com o maior valor e retornando seu nome.

Quando não existem premiações disponíveis, o resultado é `null`.

#### Conversão da duração

A duração original é fornecida em minutos. Para convertê-la em segundos, multiplica-se o valor por 60:

`duracaoSegundos = duracao × 60`

#### Nota do IMDb

A lista de avaliações é consultada para localizar o registro cuja fonte corresponde ao IMDb. Quando encontrado, o valor da nota é convertido para string. Caso contrário, o resultado é `null`.

#### Seleção da sinopse

A seleção respeita a seguinte prioridade:

1. Português brasileiro (`pt-br`).
2. Inglês (`en`).
3. Primeiro idioma disponível, caso as opções anteriores não existam.

Se não houver sinopses disponíveis, a função retorna `null`.

#### Remoção de campos

Os campos `locacoes`, `poster` e `trailer` não são incluídos no objeto final retornado pela API.

### 2.5. Documentação da API

Foi configurado o Swagger UI utilizando `swagger-jsdoc` e `swagger-ui-express`, com especificação OpenAPI.

A rota `/api-docs` disponibiliza a documentação interativa, incluindo a descrição do endpoint, os campos de resposta e os códigos HTTP documentados.

## 4. Validação da implementação

A rota foi executada e validada manualmente pelo Postman.

Durante a verificação, foram observados:

- Retorno dos oito filmes disponibilizados pela API de origem.
- Presença dos campos esperados na resposta.
- Conversão da duração para segundos.
- Retorno da nota do IMDb como string.
- Identificação da premiação de maior relevância.
- Cálculo e formatação do lucro.
- Seleção das sinopses de acordo com os idiomas disponíveis na origem.
- Ausência dos campos `locacoes`, `poster` e `trailer` na resposta final.

A documentação interativa foi disponibilizada pelo Swagger UI e verificada no navegador.

A validação descrita nesta seção foi manual. Não implica a existência de uma suíte de testes automatizados.

## 6. Considerações finais

O projeto implementa uma API que integra dados externos, aplica regras de transformação e disponibiliza os resultados por meio de um endpoint documentado.

A separação de responsabilidades, a utilização de TypeScript e a documentação com OpenAPI contribuem para a legibilidade e a manutenção da aplicação.
