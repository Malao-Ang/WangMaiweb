<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
// import FullCalendar from "@fullcalendar/vue3";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
import NavigationBarVue from "@/components/NavigationBarVue.vue";
import { useCalenderStore } from "@/store/calender.store";
import { useRoute } from "vue-router";
import _Calender from "@/store/types/Calender.type";
import { _Event } from "@/store/types/Event.type";
const route = useRoute();
const useCalender = useCalenderStore();
const id = ref(route.params.id);
onMounted(() => {
  useCalender.getOneCalenderById(id.value + "");
});
const copyText = () => {
  navigator.clipboard
    .writeText(useCalender.calender.code)
    .then(() => {
      console.log("Text copied successfully: ", useCalender.calender.code);
      // You can add additional handling or display a success message here
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
      // Handle any errors that may occur during the copy process
    });
};
const car = JSON.parse(JSON.stringify(localStorage.getItem("calender")));
const eve = ref<_Event[]>([...JSON.parse(car)]);
const attributes = computed(() => [
  ...eve.value.map((_eve) => ({
    popover: {
      label: _eve.title + ` (${_eve.user?.name})`,
      visibility: "click",
    },
    highlight: {
      color: "green",
      fillMode: "light",
    },
    dot: _eve.color,
    dates: [new Date(_eve.start + "")],
  })),
]);

// const calendarOptions = {
//     plugins: [dayGridPlugin, interactionPlugin],
//     initialView: "dayGridMonth",
//     events: [...useCalender.calender.events],
//   };
</script>
<template>
  <body>
    <div class="body">
      <NavigationBarVue></NavigationBarVue>
      <div class="calendar">
        <div class="text-sm breadcrumbs">
          <ul>
            <li>
              <a><router-link to="/">dashboard</router-link> </a>
            </li>
            <li>{{ useCalender.calender.name }}</li>
          </ul>
        </div>
        <div class="copy-btn">
          <div
            class="tooltip tooltip-left tooltip-success"
            :data-tip="useCalender.calender.code"
          >
            <button class="btn btn-sm btn-success mr-5" @click="copyText">
              Coppy CODE
            </button>
          </div>
        </div>
        <div class="the-car">
          <VCalendar expanded :attributes="attributes" />
        </div>
      </div>
      <div class="add">
        <label class="btn btn-circle btn-dialog" for="my-modal-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v12m-6-6h12"
            />
          </svg>
        </label>
      </div>
    </div>
  </body>
  <input type="checkbox" id="my-modal-6" class="modal-toggle " />
  <div class="modal modal-bottom sm:modal-middle ">
    <div class="modal-box modal-member">
      <h3 class="font-bold text-lg">All Member mai kaa</h3>
      <p class="py-4">คุณสามารถเพิ่มหรือลบสมาชิกได้ที่นี่เลย</p>
      <p class="font-bold py-4">members</p>
      <div class="for-s flex justify-between mb-3">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered  w-full max-w-xs"
        />
        <button class="btn btn-ghost btn-circle ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div class="members">
        <div
          v-for="(item, index) of useCalender.calender.members"
          :key="index"
          class="flex items-center justify-between member"
        >
          <div class="avatar">
            <div class="mask mask-circle w-12 h-12">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTMGmtj04mzjDth_vo4UohcLnp3myD1-U52fVgC6Rp2CRxclTUTO05EXdll16n8bBHzo&usqp=CAU"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">{{ item.user?.name }}</div>
            <div class="text-sm opacity-50">{{ item.user?.email }}</div>
          </div>
          <div>
            <button class="btn btn-circle btn-outline btn-sm btn-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div class="modal-action">
        <label for="my-modal-6" class="btn">OK</label>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  height: 100vh;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}
.calendar {
  padding: 20px;
}
.the-car {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90vw;
}
.copy-btn {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.add {
  overflow: hidden;
  padding: 20px;
}
.btn-dialog {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.members {
  margin-top: 10px;
  height: 45%;


}
.member {
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.129);
}
.modal-member{
  height: 75vh;
}
</style>
