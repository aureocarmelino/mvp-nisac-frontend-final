import { DetetorFumo } from "../entity/DetetorFumo";

export interface DetetorFumoResponse
{
  content: DetetorFumo[];
  pageable: any;
  totalElements: number;
}
