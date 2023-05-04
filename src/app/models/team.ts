import { User } from "./user";

export interface Team{
    id:string;
    name:string;
    users:Array<User>;
    image:string;
}