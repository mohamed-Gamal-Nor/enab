<template lang="pug">
    .loader(v-if="show")
        fulfilling-bouncing-circle-spinner( :animation-duration="2000" :size="100" color="#eee3c7")
        h1 {{ $t("introloading") }}
</template>
<script>
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'

export default {
  name: "loader",
  data(){
      return{
          show:true
      }
  },
  components:{
      FulfillingBouncingCircleSpinner  
  },
  methods:{
      showToggle(){
          setTimeout(()=>{
              this.show = false
          },1000)
      }
  },
  created(){
      this.showToggle()
  }
};
</script>
<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--seconed-color);
  width: 100%;
  height: 100%;
  z-index: 1558948541;
  h1{
      color: var(--main-color);
      text-align: center;
      margin: 0;
  }
    .fulfilling-bouncing-circle-spinner{
        margin: auto;
        top: 50%;
    }
}
</style>