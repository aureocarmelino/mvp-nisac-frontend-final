import { AcaoSubTipoAtividadeReuniaoEvento } from "../entity/AcaoSubTipoAtividadeReuniaoEvento";


export interface AcaoSubTipoAtividadeReuniaoEventoResponse
{
  content: AcaoSubTipoAtividadeReuniaoEvento[];
  pageable: any;
  totalElements: number;
}
