<script lang="ts" setup>
import { useCalenderStore } from '@/store/calender.store';
import {ref} from "vue";
const useCalender = useCalenderStore();
const code = ref("");
const email = ref(localStorage.getItem("email"));

const joinGroup = ()=>{
    if(code.value && email.value){
        useCalender.jointCalenderByCode(code.value, email.value);
        console.log("Joined group")
    }
}
</script>
<template>
     <div>
    <input type="checkbox" id="join-group-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="join-group-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-lg font-bold">Join The Group</h3>
        <p class="py-4">Enter your code to join the group!</p>
        <div class="from-car">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Enter Your code</span>
            </label>
            <input
              v-model="code"
              type="text"
              placeholder="Type here"
              class="input input-bordered input-accent w-full max-w-md"
            />
          </div>
        </div>

        <div class="modal-action">
          <label for="join-group-modal" class="btn" @click="joinGroup">Join the Group</label>
        </div>
      </div>
    </div>
  </div>
</template>