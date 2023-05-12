<script lang="ts" setup>
import CardVue from "@/components/CardVue.vue";
import GroupList from "@/components/GroupList.vue";
import NavigationBarVue from "@/components/NavigationBarVue.vue";
import { useUserStore } from "@/store/user.store";
import { onMounted } from "vue";
const useuserStore = useUserStore();
onMounted(() => {
  useuserStore.saveTolocatStorage()
});
</script>
<template>
  <div>
    <NavigationBarVue></NavigationBarVue>
    <div class="home">
      <GroupList></GroupList>
      <div class=" mx-auto list-card">
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
