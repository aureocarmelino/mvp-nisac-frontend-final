import { Cuidado } from "../entity/Cuidado";


export interface CuidadoResponse
{
  content: Cuidado[];
  pageable: any;
  totalElements: number;
}
