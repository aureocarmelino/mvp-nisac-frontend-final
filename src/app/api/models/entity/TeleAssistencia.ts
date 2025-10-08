import { Morada } from "./Morada";
import { PlanoSaudeLisboa65Mais } from "./PlanoSaudeLisboa65Mais";
import { ProjetoRadar } from "./ProjetoRadar";
import { Sinalizacao } from "./Sinalizacao";
import { TipoEquipamento } from "./TipoEquipamento";
import { TipoNaturezaOcorrencia } from "./TipoNaturezaOcorrencia";
import { TrabalhoEfetuado } from "./TrabalhoEfetuado";
import { UserNisac } from "./UserNisac";

export class TeleAssistencia
{
    id?: number;
    morada = new Morada();
    tipoNaturezaOcorrencia = new TipoNaturezaOcorrencia();
    tipoEquipamento = new TipoEquipamento();
    trabalhoEfectuado = new TrabalhoEfetuado();
    numeroProcesso?: string;
    numeroSerieEquipamento?: string;
    nomeCompleto?: string;
    idadeMomentoIntervencao?: string;
    dataNascimento?: Date;
    numeroPolicia?: string;
    fracao?: string;
    telefoneFixo?: string;
    telemovel?: string;
    insalubridadeHabitacional?: boolean;
    projetoRadar = new ProjetoRadar();
    planoSaudeLisboa65Mais = new PlanoSaudeLisboa65Mais();
    sinalizacao = new Sinalizacao();
    observacoes?: string;
    criadoPor = new UserNisac(); ;
    actualizadoPor = new UserNisac();
    status?: boolean;
    creationDate?: Date;
    updateDate?: Date;
}
