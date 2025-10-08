import { OcorrenciaCount } from "../dto/OcorrenciaCount";

export interface EstatisticaOcorrenciaMesActualResponse
{
  descricaoMesAtual: string;
  todasOcorrenciasMesActual: OcorrenciaCount[];
  totalGeral: string;
}
