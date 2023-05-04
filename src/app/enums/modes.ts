export enum LeagueMode{
    Team,
    Partner,
    Individual
}
export enum ScoringMode{
    Stroke,
    Stableford,
    CustomStableford,
    MatchPlay
}
export interface StableFordPoints{
    underPar3: 8,
    underPar2: 6,
    underPar1: 4,
    Par: 2,
    overPar1: 1,
    overPar2: 0
    overPar3: -1
}