<template>
 <!-- transparent-->
   <div
      class="routerlink w-full bg-green-500  list-none   flex flex-col sm:flex-row sm:justify-center gap-x-1">
      <router-link to="/" class="menu-item"><li class="braner">laoop</li></router-link>
      <li class="grow"></li>
      <router-link to="/" class=""><li class="nav-menu-item">หน้าแรก</li></router-link>
      <router-link to="/"><li class="nav-menu-item">ติดต่อเรา</li></router-link>
      <li class="grow"></li> 
   </div>
  
</template>
<style scoped></style>
<script lang="ts">
export default {
  name: "navbar",
};
</script>
