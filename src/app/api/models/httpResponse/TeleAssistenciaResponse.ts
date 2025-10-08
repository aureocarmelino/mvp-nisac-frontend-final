import { TeleAssistencia } from "../entity/TeleAssistencia";

export interface TeleAssistenciaResponse
{
  content: TeleAssistencia[];
  pageable: any;
  totalElements: number;
}
