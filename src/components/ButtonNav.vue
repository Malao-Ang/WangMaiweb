<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps<{
  image: string
//   name: string

}>()
</script>
<template>
    <div>
        <button>
            <div class="avatar">
              <div class="w-11 rounded-full">
                <img
                  :src="props.image"
                />
              </div>
            </div>
          </button>
    </div>
</template>