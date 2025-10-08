import { KitEmergenciaSocial } from "../entity/KitEmergenciaSocial";

export interface KitEmergenciaSocialResponse
{
  content: KitEmergenciaSocial[];
  pageable: any;
  totalElements: number;
}
