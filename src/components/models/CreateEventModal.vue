<script lang="ts" setup>
import { useCalenderStore } from "@/store/calender.store";
import Swal from "sweetalert2";
import { ref } from "vue";
const date = ref(new Date());
const free = ref(false);
const title = ref("");
const useCalender = useCalenderStore();
const save = () => {
  if (date.value  && title.value) {
    useCalender.createEvent(title.value, free.value, date.value);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops... Not Found!",
      text: "Have something wrong! ",
    });
  }
};
</script>
<template>
  <div>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="my-modal-4"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
        <p class="py-4">
          You've been selected for a chance to get one year of subscription to
        </p>
        <div>
          <VDatePicker expanded v-model="date" mode="date" />
        </div>
        <div class="form-control mt-2 mb-3">
          <div>
            <label class="label">
              <span class="label-text">Title</span>
            </label>
            <input
              v-model="title"
              type="text"
              placeholder="Type here"
              class="input input-bordered input-accent w-full max-w-md"
            />
          </div>
          <div class="flex mt-3">
            <input
              type="checkbox"
              class="checkbox checkbox-warning"
              v-model="free"
              @click="free = !free"
            />
            <p class="ml-3">Yes I'm Free</p>
          </div>
          <div class="mt-3 btn-bb">
            <button class="btn btn-success btn-sm" @click="save">
              create event!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-bb {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
