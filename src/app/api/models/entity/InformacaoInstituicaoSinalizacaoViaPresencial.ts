import { ProjetoRadar } from "./ProjetoRadar";
import { Sinalizacao } from "./Sinalizacao";

export class InformacaoInstituicaoSinalizacaoViaPresencial
{
  id?: number;
  sinalizacao?: Sinalizacao;
  nomeInstituicao?: string;
  nomeResponsavel?: string;
  grupoDeNaturezaOrigem?: string; // "APOIO", "TELEAPOIO", "OUTRO"
  status?: boolean;
  creationDate?: Date;
  updateDate?: Date;
}
