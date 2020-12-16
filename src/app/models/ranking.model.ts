export interface ResultadosRF {
    periodo: string;
    frequencia: number;
}

export interface RankingFrequencia {
    nome?: string;    
    sexo?: any;
    localidade?: string;    
    res?: ResultadosRF[];    
}