export interface Rating {
  valor: number;
  fonte: string;
}
export interface Synopsis {
  texto: string;
  idioma: string;
}
export interface Awards {
  nome: string;
  relevancia: number;
}

export interface Movie {
  titulo: string;
  diretor: string;
  ano: number;
  genero: string[];
  duracao: number;
  ratings: Rating[];
  elenco: string[];
  sinopse: Synopsis[];
  poster: string;
  trailer: string;
  locacoes: string[];
  orcamento: string;
  bilheteria: string;
  premios: Awards[];
}

export interface MovieAnalyzed {
  titulo: string;
  ano: number;
  diretor: string;
  genero: string[];
  duracaoSegundos: number;
  notaIMDb: string | null;
  lucro: string;
  maiorPremiacao: string | null;
  sinopse: string | null;
}
