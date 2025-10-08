import { AtividadeCriadaSinalizacaoViaRadar } from "./AtividadeCriadaSinalizacaoViaRadar";
import { InformacaoInstituicaoSinalizacaoViaPresencial } from "./InformacaoInstituicaoSinalizacaoViaPresencial";

export class Sinalizacao
{
    id?: number;
    foiFeitaSinalizacao?: boolean;
    comoFoiFeitaSinalizacao?: string; // PRESENCIAL , VIA_RADAR

    atividadesCriadasLista: AtividadeCriadaSinalizacaoViaRadar[] = [];
    informacaoInstituicaoSinalizacaoViaPresencialLista: InformacaoInstituicaoSinalizacaoViaPresencial[] = [];

    status?: boolean;
    creationDate?: Date;
    updateDate?: Date;
}
