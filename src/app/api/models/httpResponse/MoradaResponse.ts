import { Morada } from "../entity/Morada";

export interface MoradaResponse
{
  content: Morada[];
  pageable: any;
  totalElements: number;
}
