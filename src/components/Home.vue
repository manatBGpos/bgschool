<template>
  <div
    id="homePage"
    class="flex flex-col bg-cover bg-center w-full min-h-dvh justify-center items-center"
  >
    <div
      class="flex flex-col gap-y-4 h-dvh bg-home-bg bg-cover w-full justify-center items-center"
    >
      <div
        class="bg-gray-900 opacity-70 w-full min-h-dvh flex flex-col justify-center items-center"
      >
        <h1 class="text-yellow-500 text-white flex text-6xl font-semibold">
          welcome to my project
        </h1>
        <h1 class="text-white flex text-lg font-semibold">
          create by manat pithayakanurat
        </h1>
        <br />
      </div>
    </div>
    <!-- new latters-->
    <div class="flex flex-row mt-2 gap-x-1">
  
      <div class="grow flex flex-col m1-2 w-3/5 overflow-auto">
        <div class="flex">
          <li
            class="title w-auto bg-red-400 p-2 text-white font-20 font-lg rounded-t-lg list-none"
            >จดหมายข่าว</li>
        </div>
        <div
          class="w-full grid mt-1 grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
          <div v-for="item in 30" :key="item" class="newlatters ">
            <img src="../assets/imagetest/newLater.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- school menu -->
  </div>
</template>
<style scoped></style>
<script lang="ts">
export default {};
</script>
