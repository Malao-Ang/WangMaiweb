<script lang="ts" setup></script>
<template>
  <div class="login">
    <div class="card w-96 glass box-login">
      <h1>Login</h1>
      <div class="form-control w-full max-w-xs form-Login">
        <label class="label">
          <span class="label-text">What is your email?</span>
        </label>
        <input
          type="email"
          placeholder="Type here"
          class="input input-bordered input-info w-full max-w-xs"
        />
        <label class="label">
          <span class="label-text">What is your password?</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          class="input input-bordered input-info w-full max-w-xs"
        />
        <button class="btn gap-2 btn-outline  btn-wid mt-3">
       

        Submit
      </button>
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
  top: 10vh;
  height: 65vh;
  padding: 20px 20px;
  margin-left: 15px;
  margin-right: 15px;
}
.form-Login{
    padding: 25px;
    text-align: center;
    
}
</style>
