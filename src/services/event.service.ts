import { _Event } from "@/store/types/Event.type";
import http from "./axios";

const createEvent = (event:_Event)=>{
    return http.post(`/events`,event)
}

const updateEvent = (id:number,event:_Event)=>{
    return http.patch(`/events/${id}`,event);
}
const deleteEvent = (id:number)=>{
    return http.delete(`/events/${id}`);
}
const getEventByCalenderId = (id:number)=>{
    return http.get(`/events/calender/${id}`);
}
export default {createEvent,updateEvent,deleteEvent,getEventByCalenderId};