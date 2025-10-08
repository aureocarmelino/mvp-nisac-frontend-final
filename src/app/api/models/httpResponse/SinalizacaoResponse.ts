import { Sinalizacao } from "../entity/Sinalizacao";

export interface SinalizacaoResponse {
  content: Sinalizacao[];
  pageable: any;
  totalElements: number;
}
