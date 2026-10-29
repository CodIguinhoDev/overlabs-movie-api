import { Router } from "express";
import { getMovies } from "../controllers/movies.js";

const router = Router();

/**
 * @openapi
 * /api/v1/filmes:
 *   get:
 *     summary: Lista os filmes com dados transformados
 *     description: |
 *       Busca os filmes na API externa e retorna seus dados
 *       com lucro calculado, maior premiação, duração em
 *       segundos, nota do IMDb e sinopse selecionada por idioma.
 *     tags:
 *       - Filmes
 *     responses:
 *       200:
 *         description: Lista de filmes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   titulo:
 *                     type: string
 *                     example: O Poderoso Chefão
 *                   ano:
 *                     type: integer
 *                     example: 1972
 *                   diretor:
 *                     type: string
 *                     example: Francis Ford Coppola
 *                   genero:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example:
 *                       - Crime
 *                       - Drama
 *                   duracaoSegundos:
 *                     type: integer
 *                     example: 10500
 *                   notaIMDb:
 *                     type: string
 *                     nullable: true
 *                     example: "9.2"
 *                   lucro:
 *                     type: string
 *                     example: "$239M"
 *                   maiorPremiacao:
 *                     type: string
 *                     nullable: true
 *                     example: Oscar de Melhor Filme
 *                   sinopse:
 *                     type: string
 *                     nullable: true
 *                     example: Um chefão da máfia tenta transferir o controle de seu império clandestino para seu filho relutante.
 *       500:
 *         description: Erro interno ao processar a requisição
 */

router.get("/filmes", getMovies);

export default router;
