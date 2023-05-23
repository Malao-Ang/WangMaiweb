<script lang="ts" setup>
import NavigationBarVue from "@/components/NavigationBarVue.vue";
</script>
<template>
  <div class="about">
    <NavigationBarVue class="navb"></NavigationBarVue>
    <div class="pa-5 ">
      <h1 class="text-5xl text-center mt-3 text-bold text-white ">How to use</h1>
      <div class="main">
        <div class="card">
          <ul class="steps">
            <li class="step step-primary">สร้างปฏิทิน</li>
            <li class="step">เพิ่มการนัด</li>
            <li class="step">การแก้ไขกำหนดการ</li>
            <li class="step">การลบกำหนดการ</li>
          </ul>
          <h2 class="text-bold text-2xl mt-2 mb-2">How to Calendar</h2>
          <p>
            สร้างปฏิทินเพื่อนัดหมายกับเพื่อน โดยกดที่Add Calendarจากนั้นตั้งชื่อ
          </p>
          <img class="img-tur" src="@/assets/step/1.png " />
          <img class="img-tur" src="@/assets/step/2.png " />
        </div>

        <div class="card">
          <ul class="steps mt-3">
            <li class="step step-primary">สร้างปฏิทิน</li>
            <li class="step step-primary">เพิ่มการนัด</li>
            <li class="step">การแก้ไขกำหนดการ</li>
            <li class="step">การลบกำหนดการ</li>
          </ul>
          <h2 class="text-bold text-2xl mt-2 mb-2">เพิ่มการนัดหมาย</h2>
          <p>1. คลิกเข้าไปในปฏิทินที่ต้องการ จากนั้นกดที่เครื่องหมายบวก(+)</p>
          <p>2. เลือกวันที่ที่ต้องการเพิ่มการนัดหมาย <span style="font-weight: 500; color: rgb(211, 59, 59);">***กดเลือกวันที่ให้เป็นวงสีน้พเงินเข้มเพื่อยืนยันการเลือกวัน</span></p>
          <p>3. คลิกที่ข้อความ "Create or Update Your event"</p>
          <p>
            4. กดติ้กถูกหากคุณว่างในวันนั้น ถ้าหากไม่ว่างไม่ต้องกดที่ปุ่ม
            จากนั้นกด Save
          </p>
          <span style="font-weight: 500; color: rgb(211, 59, 59);">***คุณสามารถเลือกได้หลายๆวันโดยคลิกกดเลือกวันเริ่มต้นจากนั้นเลือกที่วันสิ้นสุดได้เลย!!!</span>
          <img class="img-tur" src="@/assets/step/3.png " />
        </div>

        <div class="card">
          <ul class="steps mt-3">
            <li class="step step-primary">สร้างปฏิทิน</li>
            <li class="step step-primary">เพิ่มการนัด</li>
            <li class="step step-primary">การแก้ไขกำหนดการ</li>
            <li class="step">การลบกำหนดการ</li>
          </ul>
          <h2 class="text-bold text-2xl mt-2 mb-2">การแก้ไขกำหนดการ</h2>
          <p>1. คลิกเข้าไปในปฏิทินที่ต้องการ จากนั้นกดที่เครื่องหมายบวก(+)</p>
          <p>2. เลือกวันที่ที่ต้องการแก้ไขการนัดหมาย</p>
          <p>3. คลิกที่ข้อความ "Create or Update Your event"</p>
          <p>
            4. กดติ้กถูกหากคุณว่างในวันนั้น ถ้าหากไม่ว่างไม่ต้องกดที่ปุ่ม
            จากนั้นกด Saveระบบจะอั้ปเดตวันนั้นทันที
          </p>
          <img class="img-tur" src="@/assets/step/3.png " />
        </div>

        <div class="card">
          <ul class="steps mt-3">
            <li class="step step-primary">สร้างปฏิทิน</li>
            <li class="step step-primary">เพิ่มการนัด</li>
            <li class="step step-primary">การแก้ไขกำหนดการ</li>
            <li class="step step-primary">การลบกำหนดการ</li>
          </ul>
          <h2 class="text-bold text-2xl mt-2 mb-2">การลบกำหนดการ</h2>
          <p>1. คลิกเข้าไปในปฏิทินที่ต้องการ จากนั้นกดที่เครื่องหมายบวก(+)</p>
          <p>2. เลือกวันที่ที่ต้องการแก้ไขการนัดหมาย</p>
          <p>3. คลิกที่ข้อความ "See your event "</p>
          <p>4. คลิกที่เครื่องหมาย X และตอบตกลง</p>
          <img class="img-tur" src="@/assets/step/4.png " />
        </div>

        <h1 class="text-5xl text-center mt-3 text-bold text-white">
          How to invite friends
        </h1>

        <div class="card">
          <h2 class="text-bold text-2xl mt-2 mb-2">
            วิธีการเชิญเพื่อนแลพเข้าร่วมกลุ่ม
          </h2>
          <p>1. คลิกที่ coppy code</p>
          <p>2. กดที่ปุ่มบวก(+)ด้านซ้ายมือจากนั้นวางcodeแล้วกด join group</p>
          <p>
            3.
            หากcodeถูกต้องคุณจะสามารถเข้าไปเพิ่มลบแก้ไขปฏิทินได้โดยเข้าทางแทบซ้ายมือ
          </p>

          <img class="img-tur" src="@/assets/step/5.png " />
          <img class="img-tur" src="@/assets/step/6.png " />
          <img class="img-tur" src="@/assets/step/7.png " />
        </div>
        <h1 class="text-5xl text-center mt-3 text-bold text-white">
          How to Delete or Leave Group
        </h1>

        <div class="card ">
          <h2>วิธีการลบหรืออกจากกลุ่ม</h2>
          <p>1. คลิกที่ ปุ่มฟันเฟือง</p>
          <p>
            2. หากคุณเป็นเจ้าลองปฏิทินคุณจะสามารถลบสมาชิกออกสามารถออก โดยกดปุ่ม
            X และยืนยัน
          </p>
          <p>
            3. หากคุณเป็นเพียงสามาชิกเมื่อต้องการออกจากกลุ่มให้กด Leave the
            Group
          </p>
          <p>
            3. หากคุณเจ้าของและต้องการลบปฏิทันให้กดปุ่ม Delete Calendar
            และยืนยัน
          </p>

          <img class="img-tur" src="@/assets/step/8.png " />
          <img class="img-tur" src="@/assets/step/9.png " />
          <p class="mt-5">Contact us (email): kai84143@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&family=Prompt&display=swap");

.about {
  height: 100%;
  background: hsla(205, 46%, 10%, 1);

background: linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0E1C26", endColorstr="#2A454B", GradientType=1 );
}
.img-tur {
  width: 45vw;
  min-width: 230px;
}

.card {
  background-color: #ffffff;
  border-radius: 2rem;
  padding: 20px;
  /* padding-bottom: 20px; */
  width: 75vw;
  min-width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}
.card img{
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  margin-top: 15px;
  width: 30vw;
  min-width: 230px;
  border: 2px black solid;
}

* {
  font-family: "Kanit", sans-serif;
  font-family: "Prompt", sans-serif;
}
</style>
