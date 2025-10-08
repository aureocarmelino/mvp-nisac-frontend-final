import { AcaoSubTipoAtividadeReuniaoEvento } from "./AcaoSubTipoAtividadeReuniaoEvento";
import { Morada } from "./Morada";
import { TipoNaturezaOcorrencia } from "./TipoNaturezaOcorrencia";
import { UserNisac } from "./UserNisac";

export class AtividadeReuniaoEvento
{
  id?: number;
  tipoNaturezaOcorrencia = new TipoNaturezaOcorrencia();
  acaoSubTipoAtividadeReuniaoEvento = new AcaoSubTipoAtividadeReuniaoEvento();
  exemplosOuReferencias?: string;
  representantesNisac?: string;
  representantesExternos?: string;
  entidadePromotoraEvento?: string;
  responsavelEntidadePromotoraEvento?: string;
  local?: string;
  ambitoOuObservacao?: boolean;
  numeroActa?: string;
  criadoPor = new UserNisac(); ;
  actualizadoPor = new UserNisac();
  status?: boolean;
  creationDate?: Date;
  updateDate?: Date;
}
