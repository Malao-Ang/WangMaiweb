<script lang="ts" setup>

</script>
<template>
  <div>
    <div class="login">
      <div class="card w-96 glass box-login">
        <h1 class="text-xl font-semibold">Login</h1>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email2gmail.com"
            class="input input-bordered input-info w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            class="input input-bordered input-info w-full max-w-xs"
          />
          <button class="btn gap-2 btn-outline btn-wid mt-3">Submit</button>
        </div>
        <div class="divider">OR</div>
        <button class="btn gap-2 btn-outline btn-primary btn-wid">
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
