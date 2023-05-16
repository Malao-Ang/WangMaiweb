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
          <h3 class="font-bold text-lg">All Member mai kaa</h3>
          <p class="py-4">คุณสามารถเพิ่มหรือลบสมาชิกได้ที่นี่เลย</p>
          <p class="font-bold py-4">members</p>
          <div class="for-s flex justify-between mb-3">
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
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
                <label  @click="useCalender.openDialog(`Are you sure?`,`คุณต้องการลบใช่หรือไม่`,`Yes`,`No`)"
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

          <div class="modal-action">
            <label
              for="my-modal-6"
              class="btn"
              @click="useCalender.openMangeDialog = false"
              >OK</label
            >
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
