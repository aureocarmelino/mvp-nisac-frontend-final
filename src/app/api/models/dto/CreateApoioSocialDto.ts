import { AtividadeCriadaSinalizacaoViaRadar } from "../entity/AtividadeCriadaSinalizacaoViaRadar";
import { InformacaoInstituicaoSinalizacaoViaPresencial } from "../entity/InformacaoInstituicaoSinalizacaoViaPresencial";


export class CreateApoioSocialDto
{
    nomeCompleto?: string;
    genero?: string;
    idadeMomentoIntervencao?: string;
    dataNascimento?: string; // Usando string para enviar no formato necessário

    moradaId!: number | null;

    tipoNaturezaOcorrenciaId!: number | null;

    numeroPolicia?: string;
    fracao?: string;
    telefone?: string;
    noSeguimentoDaOcorrenciaNumero?: string;

    kitEmergenciaSocial?: boolean;
    quantidadeKitEmergenciaSocial?: string;

    monitorizacao?: boolean;
    insalubridadeHabitacional?: boolean;

    // PROJETO RADAR
    idRadar?: string;
    entrevistaRadar?: boolean;

    // QUADRO STA
    numeroProcessoSta?: string;
    necessitaSta?: boolean;
    reuneRequisitosNecessitaSta?: boolean;
    motivoNaoReunirRequisitosSta?: string;

    // PLANO SAUDE LISBOA 65 MAIS
    numeroPlano?: string;
    jaEutentePlano?: boolean;
    foiRealizadaInscricaoPlano?: boolean;

    // SINALIZACAO
    foiFeitaSinalizacao?: boolean;
    comoFoiFeitaSinalizacao?: string;
    atividadesCriadaSinalizacaoViaRadarLista: AtividadeCriadaSinalizacaoViaRadar[] = [];
    informacaoInstituicaoSinalizacaoViaPresencialLista: InformacaoInstituicaoSinalizacaoViaPresencial[] = [];

    // ATIVIDADES COMPLEMENTARES
    atividadeComplementar?: boolean;
    atividadesComplementaresIds?: number[];

    descricaoTrabalhos?: string;
}


/*
export class CreateApoioSocialDto
{

    nomeCompleto?: string;
    genero?: string;
    idadeMomentoIntervencao?: string;
    dataNascimento?: string;

    moradaId!: number;
    tipoNaturezaOcorrenciaId!: number;

    numeroPolicia?: string;
    fracao?: string;
    telefone?: string;

    noSeguimentoDaOcorrenciaN?: string;


    // Kit Emergência
    kitEmergenciaSocial?: boolean;
    quantidadeKitEmergenciaSocial?: string;

    monitorizacao?: boolean;

    insalubridadeHabitacional?: boolean;

    // ProjetoRadar
    idRadar?: string;
    entrevistaRadar?: boolean;

    // QuadroSta
    numeroProcessoSta?: string;
    necessitaSta?: boolean;
    reuneRequisitosNecessitaSta?: boolean;
    motivoNaoReunirRequisitosSta?: string;

    // PlanoSaudeLisboa65Mais
    numeroPlano?: string;
    jaEutentePlano?: boolean;
    foiRealizadaInscricaoPlano?: boolean;

    // Sinalizacao
    foiFeitaSinalizacao?: boolean;
    comoFoiFeitaSinalizacao?: string;
    atividadesCriadasLista: AtividadeCriadaSinalizacaoViaRadar[] = [];


    // Atividade Complementar
    atividadesComplementar?: boolean;
    atividadesComplementaresIds?: number[];

    descricaoTrabalhos?: string;
}


*/
/*

export class CreateApoioSocialDto
{
    morada?: string;
    tipoNaturezaOcorrencia?: string;
    nomeCompleto?: string;
    idadeMomentoIntervencao?: string;
    genero?: string;
    numeroPolicia?: string;
    fracao?: string;
    telefone?: string;
    monitorizacao?: boolean;
    recebeApoio?: boolean;
    nomeInstituicaoApoio?: string;
    responsavelInstituicaoApoio?: string;
    descricaoTrabalhos?: string;
    numeroRadar?: string;
    numeroProcessoSta?: string;
    necessitaSta?: boolean;
    reuneRequisitosNecessitaSta?: boolean;
    motivoNaoReunirRequisitosSta?: string;
    kitEmergenciaSocial?: boolean;
    quantidadeKitEmergenciaSocial?: string;
    adesaoRadar?: boolean;
    atividadesCriadasAdesaoRadar?: string;
}
*/
