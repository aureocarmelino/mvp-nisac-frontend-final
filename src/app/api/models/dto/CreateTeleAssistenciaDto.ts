import { AtividadeCriadaSinalizacaoViaRadar } from "../entity/AtividadeCriadaSinalizacaoViaRadar";
import { InformacaoInstituicaoSinalizacaoViaPresencial } from "../entity/InformacaoInstituicaoSinalizacaoViaPresencial";


export class CreateTeleAssistenciaDto
{
    moradaId?: string;
    trabalhoEfectuadoId?: string;
    tipoEquipamentoId?: string;
    tipoNaturezaOcorrenciaId?: string;
    nomeCompleto?: string;
    numeroSerieEquipamento?: string;
    numeroPolicia?: string;
    fracao?: string;
    telefoneFixo?: string;
    telemovel?: string;
    observacoes?: string;
    numeroProcesso?: string;
    dataNascimento?: string; // Usando string para enviar no formato necessário
    idadeMomentoIntervencao?: string;

    // PROJETO RADAR
    idRadar?: string;
    entrevistaRadar?: boolean;

    // PLANO SAUDE LISBOA 65 MAIS
    numeroPlano?: string;
    jaEutentePlano?: boolean;
    foiRealizadaInscricaoPlano?: boolean;

    // SINALIZACAO
    foiFeitaSinalizacao?: boolean;
    comoFoiFeitaSinalizacao?: string;
    atividadesCriadaSinalizacaoViaRadarLista: AtividadeCriadaSinalizacaoViaRadar[] = [];
    informacaoInstituicaoSinalizacaoViaPresencialLista: InformacaoInstituicaoSinalizacaoViaPresencial[] = [];
}
