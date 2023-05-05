import { League } from "./league";
export interface Golfer{
    id: string;
    ghinId: string;
    name:string;
    email:string;
    leagues:Array<League>;
    image:string;
}