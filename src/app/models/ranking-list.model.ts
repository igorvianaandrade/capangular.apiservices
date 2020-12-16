import { RankingFrequencia } from "./ranking.model";

export interface Result {
    nome: string;
    frequencia: number;
    ranking: number;
    rankingFrequencia: RankingFrequencia;
}

export interface RankingFrequenciaList {
    localidade: string;
    sexo?: any;
    results: Result[];
}