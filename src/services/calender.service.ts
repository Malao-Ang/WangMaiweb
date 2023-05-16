import http from "./axios";
import _Calender from "@/store/types/Calender.type";

const createCalender = (calender: {name:string,email:string}) => {
  return http.post(`/calenders`, calender);
};
const updateCalender = (id: number, calender: _Calender) => {
  return http.patch(`/calenders/${id}`, calender);
};

const getCalenderById = (id: number) => {
  return http.get(`/calenders/${id}`);
};

const deleteCalender = (id: number) => {
  return http.delete(`/calenders/${id}`);
};

const joinCalender = (code: string, members: {members:string[]}) => {
  return http.patch(`/calenders/join/${code}`, members);
};

const deleteMember = (id: number, members: {id:string,members:string[]}) => {
  return http.patch(`/calenders/delete-member/${id}`, members);
};

const getCalender = (email: string) => {
  return http.get(`/calenders/email/${email}`);
};

const getJoinedCalender = (email: string) => {
  return http.get(`/calenders/joined/${email}`);
};
const findCalenderByCode = (code: string) => {
  return http.get(`/calenders/code/${code}`);
};

export default {
  findCalenderByCode,
  getCalender,
  createCalender,
  updateCalender,
  deleteCalender,
  joinCalender,
  deleteMember,
  getJoinedCalender,
  getCalenderById
};
