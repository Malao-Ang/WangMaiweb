import { Calendar } from "@fullcalendar/core";
import { User } from "./User.type";

export interface  _Event{
    id?:number;
    title?:string;
    startDate?:Date;
    endDate?:Date;
    display:string;
    user?:User;
    color?:string;
    calender?:Calendar;
    freeStatus?:boolean;

}