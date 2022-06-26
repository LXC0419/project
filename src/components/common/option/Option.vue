<template>
  <div class="option">
    <div  v-for="(val,index) in titles" :key="val" class="option_btn" @click="tabClick(index)">
      <span :class="{active:index==cont}">{{val}}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"Option",
  props:['titles'],
  data(){
    return {
      cont:0
    }
  },
  methods:{
    tabClick(index){
      this.cont=index
    }
  }
}
</script>

<style scoped>
  .option {
    display: flex;  
    height: 40px;
    line-height: 40px;
  }
  .option_btn {
    flex: 1;
    text-align: center;
  }
  .active {
    font-weight: 700;
    color: rgb(249, 140, 140);
    border-bottom: 2px solid rgba(216, 71, 71, 0.734);
    padding:5px;
  }
</style>