<script lang="ts" setup>
import CardVue from "@/components/CardVue.vue";
import GroupList from "@/components/GroupList.vue";
import NavigationBarVue from "@/components/NavigationBarVue.vue";
import { useUserStore } from "@/store/user.store";
import { onMounted } from "vue";
const useuserStore = useUserStore();
onMounted(() => {
  useuserStore.saveTolocatStorage();
});
</script>
<template>
  <div>
    <NavigationBarVue></NavigationBarVue>
    <div class="home">
      <GroupList></GroupList>
      <div class="mx-auto list-card">
        <div class="ml-10 mt-3 mb-3">
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/327006796_686653046481563_74172586481304136_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGEAvjUZgjr4Ldk4_bDMapkG2uM1p0Y8UUba4zWnRjxRdd_nyCjhj_TqXpQpgmaW-RYNMlcF3dmK1ThbCdpxbYG&_nc_ohc=QGvM-bTnDWYAX8CyvKU&_nc_ht=scontent.fbkk2-5.fna&oh=00_AfA2p1M9XWEOhbtHiK4sI5Kam_kcI4MoO_iQ47MH2wHWag&oe=646331A0" />
              </div>
            </div>
            <div class="chat-bubble">
              Hello {{ useuserStore.name }}
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <CardVue name="hello"></CardVue>
          <CardVue name="hello"></CardVue>
          <CardVue name="hello"></CardVue>
          <CardVue name="hello"></CardVue>
          <CardVue name="hello"></CardVue>
          <CardVue name="hello"></CardVue>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list-card {
  margin-left: 50px;
}
</style>
