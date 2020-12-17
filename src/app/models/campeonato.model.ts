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

export interface Edicao {
    edicao_id: number;
    temporada: string;
    nome: string;
    nome_popular: string;
    slug: string;
}

export interface ProximaFase {
    fase_id: number;
    nome: string;
    slug: string;
    tipo: string;
    _link: string;
}

export interface FaseAnterior {
    fase_id: number;
    nome: string;
    slug: string;
    tipo: string;
    _link: string;
}

export interface Fas {
    fase_id: number;
    edicao: Edicao;
    nome: string;
    slug: string;
    status: string;
    decisivo: boolean;
    eliminatorio: boolean;
    ida_e_volta: boolean;
    tipo: string;
    grupos: any[];
    chaves: any[];
    rodadas: any[];
    proxima_fase: ProximaFase;
    fase_anterior: FaseAnterior;
    _link: string;
}

export interface Campeonato {
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
    regiao?: string;
    fases?: Fas[];
}
