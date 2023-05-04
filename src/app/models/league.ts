import { LeagueMode, ScoringMode } from "../enums/modes";
import { Team } from "./team";
import { User } from "./user";

export interface League{
    id:string;
    name:string;
    commisoner:User;
    teams:Array<Team>;
    scoring:string;
    startDate:string;
    enddate:string;
    location:string;
    users:Array<User>;
    leagueMode:LeagueMode;
    scoringMode:ScoringMode;
    image:string;
}