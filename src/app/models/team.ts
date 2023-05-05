import { Golfer } from "./golfer";

export interface Team{
    id:string;
    name:string;
    users:Array<Golfer>;
    image:string;
}