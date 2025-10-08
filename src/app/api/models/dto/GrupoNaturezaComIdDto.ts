import { TipoNaturezaComIdDto } from "./TipoNaturezaComIdDto";

export class GrupoNaturezaComIdDto
{
    id!: string;
    grupo!: string;
    total!: string;
    tiposDeNatureza: TipoNaturezaComIdDto[] = [];
  }
