import { TipoOcorrencia } from "../entity/TipoOcorrencia";

export interface TipoOcorrenciaResponse
{
  content: TipoOcorrencia[];
  pageable: any;
  totalElements: number;
}
