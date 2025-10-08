import { TipoNaturezaOcorrencia } from "../../entity/TipoNaturezaOcorrencia";
import { AtividadeComplementarDto } from "../AtividadeComplementarDto";

export class ResumoDdsDto
{
    id?: number;
    nomeCompleto?: string;
    dataOcorrencia?: Date;
    tipoNaturezaOcorrencia = new TipoNaturezaOcorrencia();
    origem?: string;
    atividadesComplementares?: AtividadeComplementarDto[] = [];
    totalAtividadesComplementares?: string;
}
