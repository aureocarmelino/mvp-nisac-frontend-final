import { TipoEquipamento } from "../entity/TipoEquipamento";


export interface TipoEquipamentoResponse
{
  content: TipoEquipamento[];
  pageable: any;
  totalElements: number;
}
