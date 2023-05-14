import { Calendar } from "@fullcalendar/core";
import { UserMembersCalender } from "./UserMembersCalender.type";
import { _Event } from "./Event.type";

export interface  User{
    id?:number;
    name?:string;
    email?:string;
    photo?:string;
    calender?:Calendar;
    members:UserMembersCalender[];
    events:_Event[];
}