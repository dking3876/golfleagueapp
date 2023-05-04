import { League } from "./league";
import { User } from "./user";

export interface Scoring{
    league:League;
    date:string;
    weekNumber?:number;
}
export interface PlayerScore{
    user:User;
    front9:number;
    back9:number;
    grossTotal:number;
    handicap:number;
    netTotal:number;
    points:number;
}