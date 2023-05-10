<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps<{
  name: string

}>()
</script>
<template>
  <div class="flex justify-center">
    <div class="card bg-base-100 shadow-xl ">
      <figure>
        <img
          src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/278021562_1702469103429536_2735779673560707089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGSD2bagmOea_B5UHtpTQHHLwrXwoT8os0vCtfChPyizefwdRxXkXi8U0vD75Q-YPpu3pfqSf6oZME8ZpAm7XEx&_nc_ohc=ew7bdxxLpaAAX-hOf01&_nc_ht=scontent.fbkk2-8.fna&oh=00_AfDi6AoEhZY0oKbCMDNp8DkUQGN9rz8geja8epVMqNTC_A&oe=64612AD1"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ props.name }}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
       
      </div>
    </div>
  </div>
</template>
<style scoped>
.card{
    width:200px;
}
</style>
