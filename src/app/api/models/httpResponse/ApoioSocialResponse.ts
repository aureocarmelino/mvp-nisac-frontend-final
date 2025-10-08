import { ApoioSocial } from "../entity/ApoioSocial";

export interface ApoioSocialResponse
{
  content: ApoioSocial[];
  pageable: any;
  totalElements: number;
}
