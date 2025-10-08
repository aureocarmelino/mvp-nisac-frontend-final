import { TipoAtividadeReuniaoEvento } from "../entity/TipoAtividadeReuniaoEvento";


export interface TipoAtividadeReuniaoEventoResponse
{
  content: TipoAtividadeReuniaoEvento[];
  pageable: any;
  totalElements: number;
}
