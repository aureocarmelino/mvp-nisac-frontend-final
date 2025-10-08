import { ApoioSocial } from "./ApoioSocial";
import { AtividadeComplementar } from "./AtividadeComplementar";

export class ApoioSocialAtividadeComplementar
{
  id?: number;
  apoioSocial = new ApoioSocial();
  atividadeComplementar = new AtividadeComplementar();
  creationDate?: Date;
  updateDate?: Date;
}
