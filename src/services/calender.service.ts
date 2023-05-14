import http from "./axios";
import _Calender from "@/store/types/Calender.type";

const createCalender = (calender: _Calender) => {
  return http.post(`/calenders`, calender);
};
const updateCalender = (id: number, calender: _Calender) => {
  return http.patch(`/calenders/${id}`, calender);
};

const deleteCalender = (id: number) => {
  return http.delete(`/calenders/${id}`);
};

const joinCalender = (code: string, calender: _Calender) => {
  return http.patch(`/calenders/join/${code}`, calender);
};

const deleteMember = (id: number, calender: _Calender) => {
  return http.patch(`/calenders/delete-member/${id}`, calender);
};

const getCalender = (email: string) => {
    return http.get(`/calenders/email/${email}`);

}

const getJoinedCalender = (email: string) => {
    return http.get(`/calenders/joined/${email}`);
}

export default {
    getCalender,
  createCalender,
  updateCalender,
  deleteCalender,
  joinCalender,
  deleteMember,
  getJoinedCalender
};
