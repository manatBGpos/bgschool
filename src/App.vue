<template>
  <div class="h-auto flex flex-col px-1 h-auto">
    <!-- router start -->
    <div class="flex w-full z-50 sticky top-0 justify-center">
     <navbar class="z-50  w-full "></navbar>
    </div>
    
     <div class="flex flex-row w-full mt-1 gap-x-2">
         <div class="flex flex-col w-4/5 sm:w-2/5 md:w-1/5 min-h-dvh   border-solid border-2 sticky top-10    ">
             <asided></asided>
         </div>
          <div class="flex flex-col w-4/5 rounded-t-lg ">
                 <content class="content"></content>      
            </div>   

     </div>
  </div>
</template>
<style scoped></style>
<script lang="ts">

import Content from "./view/content.vue";
import navbar from "./view/navbar.vue";
import asided from "./view/asided.vue"
export default {
  components: { navbar, Content , asided   },
  name: "app",
};
</script>
