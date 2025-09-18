export interface InvestmentResponse {
  id: number;
  codigoAcao: string;
  nomeEmpresa: string;
  quantidade: number;
  valorUnitario: number;
  valorBruto: number;
  taxas: number;
  valorLiquido: number;
  dataCompra: string;
  dataVencimento: string | null;
  tipo: string;
  setor: string;
  resgate: InvestmentRescue;
  detalhes: InvestmenDetailResponse;
}

export interface InvestmenDetailResponse {
  dividendos: number;
  rentabilidadeAcumulada: number;
  rentabilidadeAnual: number;
  volatilidade: string;
  rating: string;
  liquidez: string;
}

export interface InvestmentRescue {
  disponivel: boolean;
  dataMinima: string;
  taxaResgate: number;
}
