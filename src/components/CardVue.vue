<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps<{
  name: string
  image: string
  date:string

}>()
</script>
<template>
  <div class="flex justify-center">
    <div class="card bg-base-100 shadow-xl ">
      <figure style="background-color: rgb(214, 214, 248);">
        <img class="image-ho"
        :src="props.image"
        
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ props.name }}</h2>
        <p class="text-xs">{{ props.date }}</p>
       
      </div>
    </div>
  </div>
</template>
<style scoped>
.card{
    width:200px;
}
.image-ho{
  transition: transform .2s;
}
.image-ho:hover{
  transform: scale(1.5) ;
}
</style>
