<template>
   <div class="App">
       <p>{{msg}}</p>
       <p>{{msg + 'jack'}}</p>
       <p>{{ega + 10}}</p>
       <p>{{gender?'男':'女'}}</p>
       <!-- 可以使用API -->
       <p>{{msg.toUpperCase().substr(1)}}</p>
       <!-- 不可以写js逻辑表达式 -->
   </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello',
      ega: 20,
      gender: true
    }
  }
}
</script>
<style lang="stylus">

</style>
