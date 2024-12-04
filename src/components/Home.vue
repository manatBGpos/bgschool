<template>
  <div id="homePage">
    <div class="flex flex-col mt-1 gap-y-2">
       <!-- image slide  -->
       <div class="imageSlide bg-image-title bg-center bg-cover rounded-lg shadow-lg   bg-red-200 w-full h-64  md:h-96 ">
        </div>
        <!-- image slide  end -->
      <!-- new latters-->
      <div class="w-auto">
        <div class="grow flex flex-col m1-2 overflow-auto">
          <div class="flex">
            <li
              class="title w-auto bg-red-400 p-2 text-white font-20 font-lg rounded-t-lg list-none">
              จดหมายข่าว
            </li>
          </div>
          <div
            class="w-full grid mt-1 grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center"          >
            <div v-for="item in 10" :key="item" class="newlatters">
              <img src="../assets/imagetest/newLater.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- school menu -->
  </div>
</template>
<style scoped></style>
<script lang="ts">
export default {
   name:'home'
};
</script>
