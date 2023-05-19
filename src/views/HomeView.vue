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
            <div class="chat chat-start">
              <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                  <img
                    src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/327006796_686653046481563_74172586481304136_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGEAvjUZgjr4Ldk4_bDMapkG2uM1p0Y8UUba4zWnRjxRdd_nyCjhj_TqXpQpgmaW-RYNMlcF3dmK1ThbCdpxbYG&_nc_ohc=QGvM-bTnDWYAX8CyvKU&_nc_ht=scontent.fbkk2-5.fna&oh=00_AfA2p1M9XWEOhbtHiK4sI5Kam_kcI4MoO_iQ47MH2wHWag&oe=646331A0"
                  />
                </div>
              </div>
              <div class="chat-bubble">Hello {{ useuserStore.name }}</div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <label for="my-modal-3">
              <CardVue
                :date="'2023-05-14'"
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
                image="https://img.freepik.com/free-vector/hand-drawn-collage-background_23-2149590537.jpg?w=1060&t=st=1684078274~exp=1684078874~hmac=e0c0488f66d61265afc91f05f4ca6f9b0170c9d23e0b65eadbe32c49f4abbd9d"
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
</style>
