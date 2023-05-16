import { Calendar } from "@fullcalendar/core";
import { User } from "./User.type";
import _Calender from "./Calender.type";

export interface  _Event{
    id?:number;
    title?:string;
    start?:Date;
    display:string;
    user?:User;
    color?:string;
    calender?:_Calender;
    freeStatus?:boolean;

}