<script lang="ts" setup>
import CardVue from "@/components/CardVue.vue";
import GroupList from "@/components/GroupList.vue";
import NavigationBarVue from "@/components/NavigationBarVue.vue";
import { useUserStore } from "@/store/user.store";
import { onMounted } from "vue";
import { useCalenderStore } from "@/store/calender.store";
import _Calender from "@/store/types/Calender.type";
import CreateCalenderModel from "@/components/models/CreateCalenderModel.vue";
import JoinGroupModal from "@/components/models/JoinGroupModal.vue";
import LoadindModal from "@/components/models/LoadindModal.vue";
const useuserStore = useUserStore();
const useCalender = useCalenderStore();

onMounted(() => {
  useuserStore.saveTolocatStorage();
  useCalender.getCalender();
});
</script>
<template>
  <div>
    <body>
      <NavigationBarVue class="navb"></NavigationBarVue>
      <div class="home">
        <GroupList class="gl"></GroupList>

        <div class="mx-auto list-card">
          <div class="ml-10 mt-3 mb-3">
            <div class="alert alert-info shadow-lg w-5/6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="text-thai"
                  >คุณสามารถดูวิธีการใช้งานำด้ที่นี่
                  <a class="link"
                    ><router-link to="/about">Tutorial</router-link></a
                  ></span
                >
              </div>
            </div>
            <div class="chat chat-start">
              <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                  <img src="@/assets/images/1.jpg" />
                </div>
              </div>
              <div class="chat-bubble">Hello {{ useuserStore.name }}</div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <label for="my-modal-3">
              <CardVue
                name="Add Calender"
                image="https://static.vecteezy.com/system/resources/previews/009/344/473/original/plus-sign-transparent-free-png.png"
              >
              </CardVue>
            </label>

            <!-- {{ useCalender.calenders }} -->
            <div v-for="(item, index) of useCalender.calenders" :key="index">
              <CardVue
                :name="item.name"
                @click="useCalender.goto(item)"
                :image="useCalender.image[index % 9]"
              >
              </CardVue>
            </div>
          </div>
        </div>
      </div>
    </body>
    <LoadindModal v-if="useCalender.loader"></LoadindModal>

    <JoinGroupModal></JoinGroupModal>
    <CreateCalenderModel></CreateCalenderModel>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&family=Prompt&display=swap");

.list-card {
  margin-left: 50px;
}
.gl {
  position: relative;
  z-index: 9999;
}
.navb {
  position: relative;
  z-index: 99999;
}
.text-thai {
  font-family: "Kanit", sans-serif;
  font-family: "Prompt", sans-serif;
}
</style>
