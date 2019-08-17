<template>
    <div class="text">
        <p>{{msg + '卢本伟'}}</p>
        <!-- 这样会覆盖里面的内容 -->
        <p v-text='msg'>{{name}}</p>
        <p v-text="name + '超级瞄准部署就绪'"></p>
        <p v-text="sahi.toUpperCase().substr(1)"></p>
        <p v-text="ega"></p>
        <p v-text="ega>25?'成年':'未成年'"></p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      sahi: 'hello word',
      msg: '伞兵一号',
      name: '卢本伟',
      ega: '26'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
