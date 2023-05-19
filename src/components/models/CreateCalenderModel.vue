<script lang="ts" setup>
import { useCalenderStore } from "@/store/calender.store";
import { useUserStore } from "@/store/user.store";
import Swal from "sweetalert2";
import { ref } from "vue";
const useCalender = useCalenderStore();
const name = ref("");
const email = ref(localStorage.getItem("email"));

const save = () => {
  if (name.value && email.value) {
    if(name.value.length < 30){
      useCalender.createCarlender(name.value, email.value);

    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input character less than 30 characters",
      });
    }

    // console.log("save!!!");
  }
};
</script>
<template>
  <div>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-lg font-bold">Create Calendar</h3>
        <p class="py-4">สร้างปฎิธินเพื่อวางแผนนัดหมายกับเพื่อนคุณได้เลย!</p>
        <div class="from-car">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">What is your calendar's name?</span>
            </label>
            <input
              v-model="name"
              type="text"
              placeholder="Type here"
              class="input input-bordered input-accent w-full max-w-md"
            />
          </div>
        </div>

        <div class="modal-action">
          <label for="my-modal-3" class="btn" @click="save">Create</label>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-box{
  overflow: hidden;
}
</style>
