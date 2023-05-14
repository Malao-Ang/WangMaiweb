import { Calendar } from "@fullcalendar/core";
import http from "./axios";

const createCalender = (calender: Calendar) => {
  return http.post(`/calenders`, calender);
};
const updateCalender = (id: number, calender: Calendar) => {
  return http.patch(`/calenders/${id}`, calender);
};

const deleteCalender = (id: number) => {
  return http.delete(`/calenders/${id}`);
};

const joinCalender = (code: string, calender: Calendar) => {
  return http.patch(`/calenders/join/${code}`, calender);
};

const deleteMember = (id: number, calender: Calendar) => {
  return http.patch(`/calenders/delete-member/${id}`, calender);
};

export default {
  createCalender,
  updateCalender,
  deleteCalender,
  joinCalender,
  deleteMember,
};
