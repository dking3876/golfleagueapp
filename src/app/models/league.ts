import { LeagueMode, ScoringMode } from "../enums/modes";
import { Team } from "./team";
import { Golfer } from "./golfer";

export interface League{
    id:string;
    name:string;
    commisoner:Golfer;
    teams:Array<Team>;
    scoring:string;
    startDate:string;
    enddate:string;
    location:string;
    users:Array<Golfer>;
    leagueMode:LeagueMode;
    scoringMode:ScoringMode;
    image:string;
    public:boolean;
}