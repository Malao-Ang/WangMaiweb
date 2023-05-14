import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "./types/User.type";
import router from "@/router";

import { _Event } from "./types/Event.type";
import { useUserStore } from "./user.store";
import calenderService from "@/services/calender.service";
import _Calender from "./types/Calender.type";
export const useCalenderStore = defineStore("calender", () => {
  const calenders = ref<_Calender[]>([
    {
      id: 0,
      name: "",
      code: "",
      owner: {
        id: 0,
        email: "",
        name: "",
        photo: "",
      },
      members:[],
     events:[]
    },
  ]);
  const calendersJoined = ref<_Calender[]>([
    {
      id: 0,
      name: "",
      code: "",
      owner: {
        id: 0,
        email: "",
        name: "",
        photo: "",
      },
      members:[],
     events:[]
    },
  ]);
  const calender = ref<_Calender>({
    id: 0,
    name: "",
    code: "",
    owner: {
      id: 0,
      email: "",
      name: "",
      photo: "",
    },
    members:[],
   events:[]
  },);
  const events = ref<_Event[]>([]);
  const _event = ref<_Event>();
//   id:0,
//     title:"",
//     startDate:"",
//     endDate:"",
//     display:"",
//     user:{ id: 0,
//         email: "",
//         name: "",
//         photo: "",},
//     color:"",
//     freeStatus:false
  const userStore = useUserStore();

  const getCalender = async () => {
    try {
      if (userStore.email) {
        const res = await calenderService.getCalender(userStore.email + "");
        console.log(JSON.stringify(res.data));
        calenders.value = res.data;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const getCalendersJoined = async ()=>{
    try {
        if (userStore.email) {
          const res = await calenderService.getJoinedCalender(userStore.email + "");
          console.log(JSON.stringify(res.data));
          calendersJoined.value = res.data;
        }
      } catch (err) {
        console.error(err);
      }
  }

  return { getCalender, calenders, events, calender,_event ,calendersJoined,getCalendersJoined};
});
