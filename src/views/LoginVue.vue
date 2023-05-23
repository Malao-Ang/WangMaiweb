<script lang="ts" setup>
import { useUserStore } from "@/store/user.store";

const userStore = useUserStore();
</script>
<template>
  <div>
    <div class="login">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ">
            <img
        :src="require(`@/assets/images/37.jpg`)"
        class="img-hero rounded-lg shadow-2xl"
      />
            <h1 class="text-5xl font-bold">Login To WANGPA</h1>
            
            <p class="py-6">
           Welcome to WANGPa(ว่างป้ะ).
            </p>
          </div>
          <div
            class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div class="card-body">
            
                  <span class="label-text mb-10 text-center text-xl text-bold">Login With Google</span>
                  <button
                    class="btn gap-2 btn-outline btn-primary btn-wid"
                    @click="userStore.login"
                  >
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                      class="h-6 w-6"
                    />

                    Sign in with Google
                  </button>
               
            </div>
          </div>
        </div>
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
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-hero{
  width: 30vw;
  min-width: 230px;
  margin-bottom: 20px;
  margin: 0 auto;
}
</style>
