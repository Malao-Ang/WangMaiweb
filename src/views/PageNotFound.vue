<template>
  <div >
    <div class="img not-found">
      <img src="@/assets/images/NotFound.jpg" alt="page not found" />
    </div>
    <div >
      <h1 class="text-center mt-5 text-4xl text-bold not-fount-text">
        <span class="text-5xl" style="color: #f266ab">404</span> Page Not Found
      </h1>
      <button class="btn glass text-center not-fount-btn ">
        <router-link to="/" ><span style="color: black;">Go to home page</span> </router-link>
      </button>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
.img {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  min-width: 260px;
}
img {
  border-radius: 2rem;
}
/* .not-found{
    position: relative;
} */
.not-found::before {
  content: "";
  position: absolute;
  inset: -5px;
  transform: translate(10px, 8px);
  z-index: -1;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  /* box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5); */
  /* content:"";
  position: absolute;
  inset: -5px;
  transform: translate(10px,8px);
  z-index: -1;
  background: conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700); */
  filter: blur(10px);
}
.not-fount-text {
  font-family: "Titan One", cursive;
}
.not-fount-btn{
display: flex;
margin: 0 auto;
margin-top: 20px;
}

</style>
