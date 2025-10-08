import { TrabalhoEfetuado } from "../entity/TrabalhoEfetuado";


export interface TrabalhoEfetuadoResponse
{
  content: TrabalhoEfetuado[];
  pageable: any;
  totalElements: number;
}
