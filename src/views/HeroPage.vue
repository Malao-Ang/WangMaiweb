<script lang="ts" setup>
import { useUserStore } from "@/store/user.store";
import { onMounted } from "vue";

const useuserStore = useUserStore();
onMounted(() => {
  useuserStore.saveTolocatStorage();
});
</script>
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        :src="require(`@/assets/images/37.jpg`)"
        class=" rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">Welcom to WANGPAA</h1>
        <p class="py-6 fontthai">
         สวัสดีทุกคนด้วยนะคะ ยินดีต้อนรับเข้าสู่เว็บว่างมั้ยจุดประสงค์ของเว็บนี้จะเป็นเว็บที่ให้เพื่อนได้มาลงวันว่างหรือไม่ว่างเพื่อหาเวลาตรงกันฝากเว็บนี้ด้วยนะคะ  🎉
        </p>
        <router-link to="/"
          ><button class="btn btn-primary">Get Started</button></router-link
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&family=Prompt&display=swap");
.fontthai {
  font-family: "Kanit", sans-serif;
  font-family: "Prompt", sans-serif;
}
img{
  min-width: 230px;
  width: 30vw;
}

</style>
