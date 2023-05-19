<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps<{
  name: string
  image: string

}>()
</script>
<template>
  <div class="flex justify-center">
    <div class="card bg-base-100 shadow-xl ">
      <figure style="background-color: rgb(214, 214, 248);">
        <img class="image-ho"
        :src="`${props.image}`"
        
        />
      </figure>
      <div class="card-body" style="height: 25%; padding-top: 20px;">
        <p class="card-title Kanit" style="font-weight: 500;">{{ props.name }}</p>
      
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&family=Prompt&display=swap");

.card{
    width:200px;
    height: 220px;
}
.image-ho{
  transition: transform .2s;
  width: 220px;
  object-fit: cover;
}
.image-ho:hover{
  transform: scale(1.5) ;
}
.Kanit {
  font-family: "Kanit", sans-serif;
  font-family: "Prompt", sans-serif;
}
</style>
