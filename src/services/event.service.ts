import { _Event } from "@/store/types/Event.type";
import http from "./axios";

const createEvent = (event: {
  title: string;
  start: Date;
  display: string;
  color: string;
  email: string;
  freeStatus: boolean;
  idCalender: number;
}) => {
  return http.post(`/events`, event);
};

const updateEvent = (id: number, event: _Event) => {
  return http.patch(`/events/${id}`, event);
};
const deleteEvent = (id: number) => {
  return http.delete(`/events/${id}`);
};
const getEventByCalenderId = (id: number) => {
  return http.get(`/events/calender/${id}`);
};

const getEventsByDate = (id:string,date_:{start:string})=>{
  return http.post(`/events/date/${id}`,date_);

}
export default { createEvent, updateEvent, deleteEvent, getEventByCalenderId,getEventsByDate };
