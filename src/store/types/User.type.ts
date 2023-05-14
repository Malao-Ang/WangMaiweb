import { Calendar } from "@fullcalendar/core";
import { UserMembersCalender } from "./UserMembersCalender.type";
import { _Event } from "./Event.type";
import _Calender from "./Calender.type";

export interface  User{
    id?:number;
    name?:string;
    email?:string;
    photo?:string;
 
}