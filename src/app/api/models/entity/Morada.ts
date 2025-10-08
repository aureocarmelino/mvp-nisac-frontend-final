import { Freguesia } from "./Freguesia";

export class Morada
{
    id?: number;
    freguesia = new Freguesia();
    rua?: string;
    status?: boolean;
    creationDate?: Date;
    updateDate?: Date;
}