<script lang="ts" setup>
import GroupList from "@/components/GroupList.vue";
import NavigationBarVue from "@/components/NavigationBarVue.vue";
</script>
<template>
  <div>
    <NavigationBarVue></NavigationBarVue>
    <div class="home">
      <GroupList></GroupList>
    </div>
  </div>
</template>
<style scoped>
.home {
}
</style>
