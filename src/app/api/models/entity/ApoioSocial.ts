import { Morada } from "./Morada";
import { TipoNaturezaOcorrencia } from "./TipoNaturezaOcorrencia";
import { ProjetoRadar } from "./ProjetoRadar";
import { QuadroSta } from "./QuadroSta";
import { PlanoSaudeLisboa65Mais } from "./PlanoSaudeLisboa65Mais";
import { ApoioSocialAtividadeComplementar } from "./ApoioSocialAtividadeComplementar";
import { UserNisac } from "./UserNisac";
import { Sinalizacao } from "./Sinalizacao";


export class ApoioSocial
{
    id?: number;
    nomeCompleto?: string;
    genero?: string;
    idadeMomentoIntervencao?: string;
    dataNascimento?: Date;
    morada = new Morada();
    tipoNaturezaOcorrencia = new TipoNaturezaOcorrencia();
    numeroPolicia?: string;
    fracao?: string;
    telefone?: string;
    noSeguimentoDaOcorrenciaNumero?: string;
    kitEmergenciaSocial?: boolean;
    quantidadeKitEmergenciaSocial?: string;
    monitorizacao?: boolean;
    insalubridadeHabitacional?: boolean;
    projetoRadar = new ProjetoRadar();
    quadroSta = new QuadroSta();
    planoSaudeLisboa65Mais = new PlanoSaudeLisboa65Mais();
    sinalizacao = new Sinalizacao();
    atividadesComplementares: ApoioSocialAtividadeComplementar[] = [];
    descricaoTrabalhos?: string;
    criadoPor?: UserNisac;
    actualizadoPor?: UserNisac;
    status?: boolean;
    creationDate?: Date;
    updateDate?: Date;
}
