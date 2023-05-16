<script lang="ts" setup>
import { useCalenderStore } from "@/store/calender.store";
import _Calender from "@/store/types/Calender.type";
import { defineProps } from "vue";
const usecalender = useCalenderStore();
const props = defineProps<{
  item: _Calender;
  image:string
}>();
</script>
<template>
  <div>
    <div class="tooltip tooltip-right" :data-tip="props.item.name">
      <button @click="usecalender.goto(props.item)">
        <div class="avatar">
          <div class="w-11 rounded-full">
            <img :src="props.image" />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

