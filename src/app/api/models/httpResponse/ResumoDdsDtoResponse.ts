import { ResumoDdsDto } from "../dto/dds/ResumoDdsDto";

export interface Page<T>
{
    content: T[];
    totalElements: number;
    number: number; // página atual
    size: number;
  }

export interface ResumoDdsDtoResponse
{
    totalGeral: number;
    totalDiretas: number;
    totalIndiretas: number;
    ddsOcorrenciaList: Page<ResumoDdsDto>;
}
