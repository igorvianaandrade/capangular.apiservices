export interface EdicaoAtual {
    edicao_id: number;
    temporada: string;
    nome: string;
    nome_popular: string;
    slug: string;
}

export interface FaseAtual {
    fase_id: number;
    nome: string;
    slug: string;
    tipo: string;
    _link: string;
}

export interface Campeonatos {
    campeonato_id?: number;
    nome?: string;
    slug?: string;
    nome_popular?: string;
    edicao_atual?: EdicaoAtual;
    fase_atual?: FaseAtual;
    rodada_atual?: any;
    status?: string;
    tipo?: string;
    logo?: string;
    _link?: string;
    results?: Result[];
}

import { Campeonato } from "./campeonato.model";

export interface Result {
    name: string;
    url: string;
    campeonato: Campeonato;
}