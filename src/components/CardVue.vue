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
          src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/327006796_686653046481563_74172586481304136_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGEAvjUZgjr4Ldk4_bDMapkG2uM1p0Y8UUba4zWnRjxRdd_nyCjhj_TqXpQpgmaW-RYNMlcF3dmK1ThbCdpxbYG&_nc_ohc=QGvM-bTnDWYAX-qh3yz&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfDtgbav6KBM3ByK7i7Mq8yQ9GcyCvd7thzWqZxMW67mLw&oe=64613760"
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
