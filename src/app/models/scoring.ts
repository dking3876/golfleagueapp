import { League } from "./league";
import { Golfer } from "./golfer";

export interface Scoring{
    league:League;
    date:string;
    weekNumber?:number;
}
export interface PlayerScore{
    user:Golfer;
    front9:number;
    back9:number;
    grossTotal:number;
    handicap:number;
    netTotal:number;
    points:number;
}