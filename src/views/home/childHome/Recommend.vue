<template>
  <div class="recommend">
    <div v-for="val in recommends" :key="val.sort" class="recommend_btn">
      <a :href="val.link">
        <img :src="val.image" alt="">
        <div>{{val.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'recommend',
  props:['recommends'],
  components:{}
}
</script>

<style scoped>
  .recommend {
    display: flex;
    box-sizing: border-box;
    border-bottom: 8px solid #eee;
    padding:15px 0;
  }
  .recommend_btn {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .recommend_btn img {
    width: 80%;
  }
</style>