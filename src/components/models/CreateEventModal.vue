<script lang="ts" setup>
import { useCalenderStore } from "@/store/calender.store";
import { aW } from "@fullcalendar/core/internal-common";
import Swal from "sweetalert2";
const useCalender = useCalenderStore();
const save = () => {
  if (useCalender.date) {
    useCalender.createEvent(useCalender.free, useCalender.date);
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
        <h3 class="text-lg font-bold">Event</h3>
        <p class="py-4">สร้างกำหนัดการไว้นัดหมายกับเพื่อนคุณได้เลย</p>
        <div>
          <VDatePicker expanded v-model="useCalender.date" mode="date" />
        </div>
        <div
          tabindex="0"
          class="collapse collapse-arrow border rounded-box mt-4"
        >
          <input type="checkbox" class="peer" />
          <div class="collapse-title">
            See your Event
            {{ useCalender.date ? useCalender.formattedDate : "" }}
          </div>
          <div class="collapse-content" v-if="useCalender.events">
            <div class="form-control mt-2 mb-3">
              <div class="flex mt-3">
                <div class="members" >
                  <div
                    v-for="(item, index) of useCalender.events"
                    :key="index"
                    class="flex items-center justify-between member"
                  >
                  
                    <div class="flex items-center">
                      <div class="avatar">
                        <div class="mask mask-circle w-12 h-12">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTMGmtj04mzjDth_vo4UohcLnp3myD1-U52fVgC6Rp2CRxclTUTO05EXdll16n8bBHzo&usqp=CAU"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div class="ml-5">
                        <div class="font-bold">
                          {{ item.freeStatus ? "✅" : "❌" }} {{ item.user?.name }}
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="
                        item.user?.email === useCalender.email
                      "
                    >
                      <label
                        @click="useCalender.deleteEvent(item.id+'')"
                        class="btn btn-circle btn-outline btn-sm btn-error"
                        for="modal-confirm-dialog"
                      >
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
                      </label>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div class="collapse-content" v-if="useCalender.events.length ===0">
         <div class=" text-center">No Data</div> 
          </div>
        </div>

        <div
          tabindex="0"
          class="collapse collapse-arrow border rounded-box mt-4"
        >
          <input type="checkbox" class="peer" />
          <div class="collapse-title">Create or update Your event</div>
          <div class="collapse-content">
            <div class="form-control mt-2 mb-3">
              <div class="flex mt-3">
                <input
                  type="checkbox"
                  class="checkbox checkbox-warning"
                  v-model="useCalender.free"
                  @click="useCalender.free = !useCalender.free"
                />
                <p class="ml-3">Yes I'm Free</p>
              </div>
              <div class="mt-3 btn-bb">
                <button class="btn btn-success btn-sm" @click="save">
                  Save
                </button>
              </div>
            </div>
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
.member {
  margin-top: 5px;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.129);
}
.members{
  width: 100%;
}
</style>
