import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "./types/User.type";
import router from "@/router";

import { _Event } from "./types/Event.type";
import { useUserStore } from "./user.store";
import calenderService from "@/services/calender.service";
import _Calender from "./types/Calender.type";
import eventService from "@/services/event.service";
import Swal from "sweetalert2";

export const useCalenderStore = defineStore("calender", () => {
  const openMangeDialog = ref(false);
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
      members: [],
      events: [],
    },
  ]);
  const showErrText = ref(false);
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
      members: [],
      events: [],
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
    members: [],
    events: [],
  });
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
  const mangeMemberDialog = ref(false);

  const getCalender = async () => {
    try {
      if (userStore.email) {
        const res = await calenderService.getCalender(userStore.email + "");
        // console.log(JSON.stringify(res.data));
        calenders.value = res.data;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const getCalendersJoined = async () => {
    try {
      if (userStore.email) {
        const res = await calenderService.getJoinedCalender(
          userStore.email + ""
        );
        // console.log(JSON.stringify(res.data));
        calendersJoined.value = res.data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getEventsByCalenderId = async (id: string) => {
    try {
      const res = await eventService.getEventByCalenderId(+id);
      events.value = res.data;
      console.log(events.value);
    } catch (err) {
      console.error(err);
    }
  };

  const getOneCalenderById = async (id: string) => {
    try {
      const res = await calenderService.getCalenderById(+id);
      calender.value = res.data;
      localStorage.setItem("calender", JSON.stringify(calender.value.events));
    } catch (err) {
      console.log(err);
    }
  };
  const goto = async (item:_Calender)=>{
    calender.value = item;
    await getOneCalenderById(calender.value.id+'');
    router.push(`/calender/${calender.value.id}/${item.code}`)
  }

  const createCarlender = async (name:string,email:string)=>{
    try{
      const calender = {
        name:name,
        email:email
      }
      const res = await calenderService.createCalender(calender);
      Swal.fire(
        'Done!',
        'Everything done.',
        'success'
      )
      await getCalender();
    }catch(e){
      console.log(`Cannot createCarlender`);
    }
  
  }

  const jointCalenderByCode = async (code:string,email:string)=>{
    try{
      const members = {
        members:[email]
      }
      const res = await calenderService.joinCalender(code,members);
      console.log(res.data);
      Swal.fire(
        'Done!',
        'Everything done.',
        'success'
      )
      await getCalendersJoined();
      

    }catch(e){
      console.log(e);
    }

  }
  const openDialog = (title: string, desc: string, okBtn: string, cancel: string) => {
    return Swal.fire({
      title: title,
      text: desc,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: okBtn,
      cancelButtonText: cancel,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
        'Done!',
        'Everything done.',
        'success'
      )
        return Promise.resolve();
      } else if (result.isDismissed) {
        return ;
      }
    });
  };

  return {
    mangeMemberDialog,
    getEventsByCalenderId,
    getCalender,
    calenders,
    events,
    calender,
    _event,
    calendersJoined,
    getCalendersJoined,
    getOneCalenderById,
    goto,
    createCarlender,
    showErrText,
    jointCalenderByCode,
    openMangeDialog,
    openDialog
    
  };
});
