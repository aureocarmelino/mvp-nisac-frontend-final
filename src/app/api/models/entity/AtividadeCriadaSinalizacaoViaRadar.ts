import { ProjetoRadar } from "./ProjetoRadar";
import { Sinalizacao } from "./Sinalizacao";

export class AtividadeCriadaSinalizacaoViaRadar
{
  id?: number;
  sinalizacao?: Sinalizacao;
  tipoAtividadeCriada?: string;
  entidade?: string;
  grupoDeNaturezaOrigem?: string; // "APOIO", "TELEAPOIO", "OUTRO"
  status?: boolean;
  creationDate?: Date;
  updateDate?: Date;
}
