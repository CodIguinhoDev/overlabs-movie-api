import { treatmentToValueMonetary, formatMonetaryValue } from "./helpers.js";
import type { Awards, Movie, MovieAnalyzed, Rating, Synopsis } from "../types/movie.js";

export const calculateProfit = (boxOffice: string, budget: string): string => {
  const profit = treatmentToValueMonetary(boxOffice) - treatmentToValueMonetary(budget);
  return formatMonetaryValue(profit);
};

export const biggerAwards = (awards?: Awards[]): string | null => {
  if (!awards || awards.length === 0) return null;

  return awards.reduce((bigger, current) => (current.relevancia > bigger.relevancia ? current : bigger)).nome;
};

export const convertDurationToSeconds = (minutes: number): number => {
  return minutes * 60;
};

export const getIMDbRating = (ratings?: Rating[]): string | null => {
  if (!ratings) {
    return null;
  }
  const imdb = ratings.find((r) => r.fonte.toLowerCase() === "imdb");
  return imdb ? String(imdb.valor) : null;
};

export const getSynopsis = (synopsis?: Synopsis[]): string | null => {
  if (!synopsis || synopsis.length === 0) return null;

  const selected =
    synopsis.find((s) => s.idioma.toLowerCase() === "pt-br") ||
    synopsis.find((s) => s.idioma.toLowerCase() === "en") ||
    synopsis[0];

  return selected.texto;
};

export const parseMovie = (movie: Movie): MovieAnalyzed => {
  return {
    titulo: movie.titulo,
    ano: movie.ano,
    diretor: movie.diretor,
    genero: movie.genero,
    duracaoSegundos: convertDurationToSeconds(movie.duracao),
    notaIMDb: getIMDbRating(movie.ratings),
    lucro: calculateProfit(movie.bilheteria, movie.orcamento),
    maiorPremiacao: biggerAwards(movie.premios),
    sinopse: getSynopsis(movie.sinopse),
  };
};
