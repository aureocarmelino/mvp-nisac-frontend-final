import { SaidaAbtm } from "../entity/SaidaAbtm";

export interface SaidaComAbtmResponse
{
  content: SaidaAbtm[];
  pageable: any;
  totalElements: number;
}
