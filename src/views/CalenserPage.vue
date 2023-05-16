<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import NavigationBarVue from "@/components/NavigationBarVue.vue";
import { useCalenderStore } from "@/store/calender.store";
import { useRoute } from "vue-router";
import _Calender from "@/store/types/Calender.type";
import { _Event } from "@/store/types/Event.type";
import ManagememberModel from "@/components/models/ManagememberModel.vue";
import CreateEventModal from "@/components/models/CreateEventModal.vue";
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
    // highlight: {
    //   color: "green",
    //   fillMode: "light",
    // },
    dot: _eve.freeStatus? 'red':'green',
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
            class="tooltip tooltip-top tooltip-success"
            :data-tip="useCalender.calender.code"
          >
            <button class="btn btn-sm btn-success mr-5" @click="copyText">
              Coppy CODE
            </button>
          </div>
          <div>
            <div class="tooltip tooltip-top" data-tip="setting">
              <label
                class="btn btn-circle btn glass"
                for="my-modal-6"
                @click="useCalender.openMangeDialog = true"
              >
                <img src="@/assets/images/settings.png" />
              </label>
            </div>
          </div>
        </div>
        <div class="the-car">
          <VCalendar expanded :attributes="attributes" />
        </div>
      </div>
      <div class="add">
        <label class="btn btn-circle btn-dialog" for="my-modal-4">
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
  <CreateEventModal v-model="useCalender.dialog_event"></CreateEventModal>

  <ManagememberModel
    v-if="useCalender.openMangeDialog === true"
  ></ManagememberModel>
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
  align-items: center;
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
</style>
