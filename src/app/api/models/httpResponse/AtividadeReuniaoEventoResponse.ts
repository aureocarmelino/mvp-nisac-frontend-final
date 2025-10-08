import { AtividadeReuniaoEvento } from "../entity/AtividadeReuniaoEvento";


export interface AtividadeReuniaoEventoResponse
{
  content: AtividadeReuniaoEvento[];
  pageable: any;
  totalElements: number;
}
