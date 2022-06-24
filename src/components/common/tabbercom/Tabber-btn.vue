<template>
  <div class="tab-bar-itm" @click="pathbtn">
    <div v-if="flg"><slot name="Tab-img1"></slot></div>
    <div v-else><slot name="Tab-img2"></slot></div>
    <div :style="isColor"><slot name="Tab-txt"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    paths:String,
    btncolor:{
      type:String,
      default:'black'
    }
  },
  methods:{
    pathbtn(){
      this.$router.replace(this.paths)
    }
  },
  computed:{
    flg(){
      return this.$route.path==this.paths
    },
    isColor(){
      return this.flg? {color:this.btncolor}:{}
    }
  }
}

</script>

<style>
  .tab-bar-itm {
    flex: 1;
    text-align: center;
  }
  .tab-bar-itm img {
    margin-top: 4px;
    width: 22px;
    height: 22px;
  }
</style>