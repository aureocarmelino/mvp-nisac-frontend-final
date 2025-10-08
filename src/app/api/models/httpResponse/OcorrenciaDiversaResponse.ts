import { OcorrenciaDiversa } from "../entity/OcorrenciaDiversa";

export interface OcorrenciaDiversaResponse
{
  content: OcorrenciaDiversa[];
  pageable: any;
  totalElements: number;
}
