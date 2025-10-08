import { GrupoNaturezaComIdDto } from "../GrupoNaturezaComIdDto";


export class ResumoRsblDto
{
    totalGeral!: string;
    totalNaturezas!: string;
    gruposNaturezas: GrupoNaturezaComIdDto [] = [];

    totalAtividadesComplementares!: string;

    //totalPorAtividadeComplementar: { [descricao: string]: number };
  }
