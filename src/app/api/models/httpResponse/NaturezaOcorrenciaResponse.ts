import { TipoNaturezaOcorrencia } from "../entity/TipoNaturezaOcorrencia";

export interface NaturezaOcorrenciaResponse {
  content: TipoNaturezaOcorrencia[];
  pageable: any;
  totalElements: number;
}
