<script lang="ts" setup>
import { useCalenderStore } from "@/store/calender.store";
import { ref } from "vue";
const email = ref(localStorage.getItem("email"));

const useCalender = useCalenderStore();
</script>
<template>
  <div>
    <body>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box modal-member">
          <label
          for="my-modal-6"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="useCalender.openMangeDialog = false"
          >✕</label
        >
          <h3 class="font-bold text-lg">All Member mai kaa</h3>
          <p class="py-4">คุณสามารถเพิ่มหรือลบสมาชิกได้ที่นี่เลย</p>
          <p class="font-bold py-4">members</p>
         

          <div class="members">
            <div
              v-for="(item, index) of useCalender.calender.members"
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
                  <div class="font-bold">{{ item.user?.name }}</div>
                  <div class="text-sm opacity-50">{{ item.user?.email }}</div>
                </div>
              </div>

              <div v-if="email === useCalender.calender.owner.email">
                <label
                  @click="useCalender.deleteMember(item.user?.email!)"
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

          <div class="modal-action justify-between">
            <a class="link link-error" v-if="email === useCalender.calender.owner.email" @click="useCalender.deleteCalender()">Delete Calendar</a>
            <a class="link link-error" v-else @click="useCalender.leaveTheGroup(email!)">Leave The Group</a>

            <!-- <label
              for="my-modal-6"
              class="btn"
              @click="useCalender.openMangeDialog = false"
              >OK</label
            > -->
          </div>
        </div>
      </div>
    </body>
  </div>
</template>
<style scoped>
.members {
  margin-top: 10px;
  height: 45%;
}
.member {
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.129);
}
.modal-member {
  height: 75vh;
}
</style>
