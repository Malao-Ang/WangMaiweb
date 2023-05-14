<script lang="ts" setup>
import CardVue from "@/components/CardVue.vue";
import GroupList from "@/components/GroupList.vue";
import NavigationBarVue from "@/components/NavigationBarVue.vue";
import { useUserStore } from "@/store/user.store";
import { onMounted } from "vue";
import CalenserPage from "./CalenserPage.vue";
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
          <CardVue :date="'2023-05-14'" name="Add Calender" image="https://static.vecteezy.com/system/resources/previews/009/344/473/original/plus-sign-transparent-free-png.png"></CardVue>
          <CardVue :date="'2023-05-14'" name="hello" image="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/278021562_1702469103429536_2735779673560707089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGSD2bagmOea_B5UHtpTQHHLwrXwoT8os0vCtfChPyizefwdRxXkXi8U0vD75Q-YPpu3pfqSf6oZME8ZpAm7XEx&_nc_ohc=ew7bdxxLpaAAX-hOf01&_nc_ht=scontent.fbkk2-8.fna&oh=00_AfDi6AoEhZY0oKbCMDNp8DkUQGN9rz8geja8epVMqNTC_A&oe=64612AD1"></CardVue>
          <CardVue :date="'2023-05-14'" name="hello" image="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/278021562_1702469103429536_2735779673560707089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGSD2bagmOea_B5UHtpTQHHLwrXwoT8os0vCtfChPyizefwdRxXkXi8U0vD75Q-YPpu3pfqSf6oZME8ZpAm7XEx&_nc_ohc=ew7bdxxLpaAAX-hOf01&_nc_ht=scontent.fbkk2-8.fna&oh=00_AfDi6AoEhZY0oKbCMDNp8DkUQGN9rz8geja8epVMqNTC_A&oe=64612AD1"></CardVue>
          <CardVue :date="'2023-05-14'" name="hello" image="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/278021562_1702469103429536_2735779673560707089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGSD2bagmOea_B5UHtpTQHHLwrXwoT8os0vCtfChPyizefwdRxXkXi8U0vD75Q-YPpu3pfqSf6oZME8ZpAm7XEx&_nc_ohc=ew7bdxxLpaAAX-hOf01&_nc_ht=scontent.fbkk2-8.fna&oh=00_AfDi6AoEhZY0oKbCMDNp8DkUQGN9rz8geja8epVMqNTC_A&oe=64612AD1"></CardVue>
          <CardVue :date="'2023-05-14'" name="hello" image="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/278021562_1702469103429536_2735779673560707089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGSD2bagmOea_B5UHtpTQHHLwrXwoT8os0vCtfChPyizefwdRxXkXi8U0vD75Q-YPpu3pfqSf6oZME8ZpAm7XEx&_nc_ohc=ew7bdxxLpaAAX-hOf01&_nc_ht=scontent.fbkk2-8.fna&oh=00_AfDi6AoEhZY0oKbCMDNp8DkUQGN9rz8geja8epVMqNTC_A&oe=64612AD1"></CardVue>
          <CardVue :date="'2023-05-14'" name="hello" image="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/278021562_1702469103429536_2735779673560707089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGSD2bagmOea_B5UHtpTQHHLwrXwoT8os0vCtfChPyizefwdRxXkXi8U0vD75Q-YPpu3pfqSf6oZME8ZpAm7XEx&_nc_ohc=ew7bdxxLpaAAX-hOf01&_nc_ht=scontent.fbkk2-8.fna&oh=00_AfDi6AoEhZY0oKbCMDNp8DkUQGN9rz8geja8epVMqNTC_A&oe=64612AD1"></CardVue>
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
