import { defineStore } from "pinia";
import { ref, watch, computed } from "vue";
import { User } from "./types/User.type";
import router from "@/router";

import { _Event } from "./types/Event.type";
import { useUserStore } from "./user.store";
import calenderService from "@/services/calender.service";
import _Calender from "./types/Calender.type";
import eventService from "@/services/event.service";
import Swal from "sweetalert2";
import { aW } from "@fullcalendar/core/internal-common";

export const useCalenderStore = defineStore("calender", () => {
  const openMangeDialog = ref(false);
  const dialog_event = ref(false);
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
  const _event = ref<_Event>({
    id: 0,
    title: "",
    start: new Date(),

    display: "list-item",
    user: { id: 0, email: "", name: "", photo: "" },
    color: "",
    freeStatus: false,
    calender: { ...calender.value },
  });
  const loader = ref(false);
  const userStore = useUserStore();
  const mangeMemberDialog = ref(false);
  const date = ref(new Date());
  const free = ref(false);
  const email = ref(localStorage.getItem("email"));
  const formattedDate = computed(() => {
    if (date.value) {
      const value = date.value;
      const year = value.getFullYear();
      const month = String(value.getMonth() + 1).padStart(2, "0");
      const day = String(value.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    return "";
  });
  watch(formattedDate, async (newValue, oldValue) => {
    if (newValue) {
      await getEventsByDate();
    }
  });
  const getCalender = async () => {
    try {
      loader.value = true;
      if (email.value) {
        const res = await calenderService.getCalender(email.value + "");
        // console.log(JSON.stringify(res.data));
        calenders.value = res.data;
      }
      loader.value = false;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Have something omething wrong!",
      });
      loader.value = false;
    }
  };
  const getCalendersJoined = async () => {
    try {
      loader.value = true;

      if (userStore.email) {
        const res = await calenderService.getJoinedCalender(
          userStore.email + ""
        );
        // console.log(JSON.stringify(res.data));
        calendersJoined.value = res.data;
        loader.value = false;
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Have something wrong! ",
      });
      loader.value = false;
    }
  };

  const getEventsByCalenderId = async (id: string) => {
    try {
      loader.value = true;

      const res = await eventService.getEventByCalenderId(+id);
      events.value = res.data;
      console.log(events.value);
      loader.value = false;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Have something wrong! ",
      });
      loader.value = false;
    }
  };

  const getOneCalenderById = async (id: string) => {
    try {
      loader.value = true;

      const body_ = {
        email: email.value + "",
      };
      const res = await calenderService.getCalenderById(+id, body_);
      calender.value = res.data;
      localStorage.setItem("calender", JSON.stringify(calender.value.events));
      loader.value = false;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Have something wrong! ",
      });
      loader.value = false;

      router.push("/");
    }
  };
  const goto = async (item: _Calender) => {
    calender.value = item;
    await getOneCalenderById(calender.value.id + "");

    router.push(`/calender/${calender.value.id}/${item.code}`);
  };

  const createCarlender = async (name: string, email: string) => {
    loader.value = true;

    try {
      const calender = {
        name: name,
        email: email,
      };
      const res = await calenderService.createCalender(calender);
      Swal.fire("Done!", "Everything done.", "success");
      await getCalender();
      loader.value = false;
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Have something wrong! ",
      });
      loader.value = false;
    }
  };

  const jointCalenderByCode = async (code: string, email: string) => {
    try {
      loader.value = true;

      const members = {
        members: [email],
      };
      const res = await calenderService.joinCalender(code, members);
      console.log(res.data);

      Swal.fire("Done!", "Everything done.", "success");
      await getCalendersJoined();
      loader.value = false;
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops... Not Found!",
        text: "Have something wrong! ",
      });
      loader.value = false;
    }
  };
  const deleteMember = async (email: string) => {
    try {
      await openDialog(
        `Are you sure`,
        `Are you sure you want to delete user ${email}`,
        `Yes`,
        `No`
      );
      loader.value = true;

      const members = {
        id: calender.value.id + "",
        members: [email],
      };
      const res = await calenderService.deleteMember(
        calender.value.id,
        members
      );
      await getOneCalenderById(calender.value.id + "");
      loader.value = false;
    } catch (e) {
      console.log(e);
      loader.value = false;
    }
  };
  const openDialog = (
    title: string,
    desc: string,
    okBtn: string,
    cancel: string
  ) => {
    return Swal.fire({
      title: title,
      text: desc,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: okBtn,
      cancelButtonText: cancel,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Done!", "Everything done.", "success");
        return Promise.resolve();
      } else if (result.isDismissed) {
        return Promise.reject();
      }
    });
  };

  const deleteCalender = async () => {
    try {
      await openDialog(
        `Are you sure`,
        `Are you sure you want to delete calendar ${calender.value.name}`,
        `Yes`,
        `No`
      );
      loader.value = true;

      const res = await calenderService.deleteCalender(calender.value.id);
      loader.value = false;

      router.push("/");
    } catch (e) {
      console.log(e);
      loader.value = false;
    }
  };
  const leaveTheGroup = async (email: string) => {
    try {
      await openDialog(
        `Are you sure`,
        `Are you sure you want to delete user ${email}`,
        `Yes`,
        `No`
      );
      loader.value = true;

      const members = {
        id: calender.value.id + "",
        members: [email],
      };
      const res = await calenderService.deleteMember(
        calender.value.id,
        members
      );
      loader.value = false;

      router.push("/");
    } catch (e) {
      console.log(e);
      loader.value = false;
    }
  };
  function isFutureDate(day: number, month: number, year: number): boolean {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth() + 1; // Months are zero-indexed in JavaScript Date object
    const currentDay: number = currentDate.getDate();

    if (year < currentYear) {
      console.log("not year " + currentYear);
      return false;
    } else if (year === currentYear) {
      if (month < currentMonth) {
        // console.log("not month " + month);

        return false;
      } else if (month === currentMonth) {
        // console.log("currnt mounth " + month);
        if (day <= currentDay) {
          // console.log("currnt day " + day);

          return false;
        }
      }
    }

    return true;
  }
  // event handlers
  const createEvent = async (free_: boolean, date_: Date) => {
    try {
      loader.value = true;

      const myDate = new Date(date_);
      const isOlder = isFutureDate(
        myDate.getDate(),
        myDate.getMonth() + 1,
        myDate.getFullYear()
      );
      console.log(isOlder);
      if (isOlder === false) {
        return Swal.fire({
          icon: "error",
          title: "Oops... Not Found!",
          text: "Pick a date currently",
        });
      }
      const email = ref(localStorage.getItem("email"));
      const name = ref(localStorage.getItem("name"));

      const eve = {
        title: name.value + "",
        start: new Date(date_),
        display: "list-item",
        color: "#74ebd5",
        email: email.value + "",
        freeStatus: free_,
        idCalender: calender.value.id,
      };
      console.log(eve);
      const res = await eventService.createEvent(eve);
      console.log(res.data);

      Swal.fire("Done!", "Everything done.", "success");
      await getOneCalenderById(calender.value.id + "");
      loader.value = false;

      location.reload();
      dialog_event.value = false;
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Oops... Not Found!",
        text: "You are create already ",
      });
      dialog_event.value = false;
    }
  };
  const getEventsByDate = async () => {
    try {
      loader.value = true;

      const start = {
        start: formattedDate.value,
      };
      const res = await eventService.getEventsByDate(
        calender.value.id + "",
        start
      );
      events.value = res.data;
      loader.value = false;

      // console.log(res.data);
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Oops... Not Found!",
        text: "Can not delete event please try again.",
      });
      dialog_event.value = false;
    }
  };
  const deleteEvent = async (id: string) => {
    try {
      await openDialog(
        `Are you sure`,
        `Are you sure you want to delete this evemt? `,
        `Yes`,
        `No`
      );
      loader.value = true;

      const res = await eventService.deleteEvent(+id);
      Swal.fire("Done!", "Everything done.", "success");
      await getOneCalenderById(calender.value.id + "");
      loader.value = false;
      location.reload();
      dialog_event.value = false;
    } catch (e) {
      console.log(e);
      loader.value = false;
    }
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
    openDialog,
    deleteMember,
    deleteCalender,
    leaveTheGroup,
    createEvent,
    dialog_event,
    getEventsByDate,
    date,
    free,
    email,
    formattedDate,
    deleteEvent,
    loader,
  };
});
