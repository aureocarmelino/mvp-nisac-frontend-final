import { AtividadeComplementar } from "../entity/AtividadeComplementar";

export interface AtividadeComplementarResponse
{
  content: AtividadeComplementar[];
  pageable: any;
  totalElements: number;
}
