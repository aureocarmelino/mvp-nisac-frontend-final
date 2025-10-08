import { UserNisac } from "../entity/UserNisac";


export interface UserNisacResponse
{
  content: UserNisac[];
  pageable: any;
  totalElements: number;
}
