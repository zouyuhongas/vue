<template>
    <div>
        <p>v-html</p>
        <p v-text="content"></p>
        <p v-html="content"></p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello word',
      name: '卢本伟',
      content: '<h1>伞兵一号卢本伟准备就绪,我卢本伟没有开挂</h1>'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
