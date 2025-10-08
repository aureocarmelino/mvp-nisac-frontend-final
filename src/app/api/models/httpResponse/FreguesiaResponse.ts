import { Freguesia } from "../entity/Freguesia";


export interface FreguesiaResponse
{
  content: Freguesia[];
  pageable: any;
  totalElements: number;
}
