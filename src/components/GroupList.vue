<script lang="ts" setup>
import { useCalenderStore } from "@/store/calender.store";
import { onMounted } from "vue";
import ButtonNav from "./ButtonNav.vue";
import JoinGroupModal from "./models/JoinGroupModal.vue";
const useCalender = useCalenderStore();
onMounted(async () => {
  await useCalender.getCalendersJoined();
});
</script>
<template>
  <div>
    <body>
      <div class="list">
        <ul>
          <div v-if="useCalender.calendersJoined">
            <li
              v-for="(item, index) of useCalender.calendersJoined"
              :key="index"
            >
              <ButtonNav
                v-if="item.name"
                :item="item"
                :image="useCalender.image[index%10]"
              ></ButtonNav>
            </li>
          </div>
          <li>
            <div class="tooltip tooltip-right" data-tip="add Group">
              <button>
                <label for="join-group-modal">
                  <div class="avatar">
                    <div class="w-11 rounded-full">
                      <img
                        src="https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4="
                      />
                    </div>
                  </div>
                </label>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </body>
    <JoinGroupModal></JoinGroupModal>
  </div>
</template>
<style scoped>
.list {
  background-color: #212a3e;
  border-radius: 0 5px 5px 0;
  height: 100vh;
  width: 5vw;
  min-width: 50px;
  position: fixed;
}
ul {
  text-align: center;
  margin-top: 20px;
}
li {
  margin-bottom: 10px;
}
</style>
