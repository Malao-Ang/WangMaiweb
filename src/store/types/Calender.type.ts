import { _Event } from "./Event.type";
import { UserMembersCalender } from "./UserMembersCalender.type";

export default interface Calender{
    id?:number;
    name?:string;
    owner?:string;
    members?:UserMembersCalender[];
    event?:_Event[];
    code?:string;
   
}