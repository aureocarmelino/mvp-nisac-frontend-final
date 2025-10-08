import { TipoAtividadeReuniaoEvento } from "./TipoAtividadeReuniaoEvento";

export class AcaoSubTipoAtividadeReuniaoEvento
{
    id?: number;
    description?: string;
    tipoAtividadeReuniaoEvento = new TipoAtividadeReuniaoEvento()
    status?: boolean;
    creationDate?: Date;
    updateDate?: Date;
}
