<template>
  <div>
    <div v-for="item in demoArr" :key="item.id" class="box">
      <Edit :editId="item.id" :ref="'edit'+item.id" :content="item.content"></Edit>
    </div>
  </div>
</template>

<script>
  import Edit from '@/components/CanvasEdit/Index1'
  import {
    dataArr
  } from "@/components/CanvasEdit/mock1"
  export default {
    name: "index",
    components: {
      Edit
    },
    data() {
      return {
        demoArr: [{
          id: 1,
          content: [{
            value: '我是div1'
          }]
        }, {
          id: 2,
          content: [{
            value: '我是div2'
          }]
        }]
      }
    },
    created() {
      // this.demoArr = dataArr
    },
    mounted() {
      this.demoArr.forEach((element, index) => {
        this.$refs['edit' + element.id][0].setHtml(element.content)
      });
      // 
    }
  }
</script>

<style scoped>
  .box {
    width: 50%;
    float: left;
  }
</style>