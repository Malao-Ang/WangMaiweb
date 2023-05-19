<script lang="ts" setup>
import { useUserStore } from '@/store/user.store';

const userStore = useUserStore();

</script>
<template>
  <div>
    <div class="login">
      <div class="card w-96 glass ">
        
        <button class="btn gap-2 btn-outline btn-primary btn-wid" @click="userStore.login">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            class="h-6 w-6"
          />

          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login {
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-login {

  height: 65vh;
  padding: 20px 20px;
  margin-left: 15px;
  margin-right: 15px; display: flex;
  align-items: center;
  justify-content: center;
}

</style>
