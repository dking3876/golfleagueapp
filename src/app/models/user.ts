import { League } from "./league";
export interface User{
    id: string;
    ghinId: string;
    name:string;
    email:string;
    leagues:Array<League>;
    image:string;
}