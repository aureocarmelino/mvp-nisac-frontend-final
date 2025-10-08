import { SaidaHospitalAbtm } from "../entity/SaidaHospitalAbtm";

export interface SaidaHospitalComAbtmResponse
{
  content: SaidaHospitalAbtm[];
  pageable: any;
  totalElements: number;
}
