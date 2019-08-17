<template>
    <div class="bind">
        <p>{{msg}}</p>
        <img v-bind:src="img" alt="">
        <a :href="'/del?id='+id">删除</a>
        <p :[prop]='username'>动态绑定</p>
        <p :class="{isRed:hasRed}">这是红色</p>
        <button @click="isCollpse=!isCollpse">点击伸展</button>
        <div :class="{left:true,collpse:isCollpse}"></div>
        <p :class="[isred,isunder]">卢本伟</p>
        <p :style="{fontSize:fontsize+'px'}">伞兵一号卢本伟准备就绪</p>

    </div>
</template>
<script>
import img from '@/assets/11.jpg'
export default {
  data () {
    return {
      msg: '这个是bind',
      img: img,
      id: Math.floor(Math.random() * 100),
      prop: 'youname',
      username: '卢本伟',
      hasRed: true,
      isred: 'isRed',
      isCollpse: false,
      isunder: 'under',
      fontsize: 90
    }
  }
}
</script>
<style lang="less" scoped>
    .isRed{
        color: red
    }
    .left{
        width: 300px;
        height: 300px;
        border: 5px solid red;
        transition: width .4s;
    }
    .collpse{
        width: 50px;
    }
    .under{
        text-decoration: underline;
    }
</style>
