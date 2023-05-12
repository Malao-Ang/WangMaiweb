<script lang="ts" setup>
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  events:[
  {
    title: "Event 1",
    start: "2023-05-15",
    end: "2023-05-16",
    display:'background'
  },
  {
    title: "Kaewmanee",
    start: "2023-05-17",
    end: "2023-05-18",
    display:'list-item',
    color: '#74ebd5',
    
   
  },
  {
    title: "Khanusanun",
    start: "2023-05-17",
    end: "2023-05-18",
    display:'list-item',
    color: '#9face6',
    
   
  },
]
};

</script>
<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>
