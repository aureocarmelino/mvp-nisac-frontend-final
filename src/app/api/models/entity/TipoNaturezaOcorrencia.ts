import { GrupoNaturezaOcorrencia } from "./GrupoNaturezaOcorrencia";

export class TipoNaturezaOcorrencia
{
  id?: number;
  description?: string;
  code?: number;
  status?: boolean;
  grupoNaturezaOcorrencia = new GrupoNaturezaOcorrencia();
  creationDate?: Date;
  updateDate?: Date;
}
