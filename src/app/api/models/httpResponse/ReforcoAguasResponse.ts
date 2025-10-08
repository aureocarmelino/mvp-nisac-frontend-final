import { ReforcoAguas } from "../entity/ReforcoAguas";

export interface ReforcoAguasResponse {
  content: ReforcoAguas[];
  pageable: any;
  totalElements: number;
}
