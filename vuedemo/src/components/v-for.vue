<template>
    <div>
      <p>sadaasafaf</p>
      <ul>
          <li v-for="(value,index) in arr" :key='index'>{{value+':'+index}}</li>
      </ul>
      <div v-for="(v,k,p) in obj" :key="p">{{k+':'+v+'---'+p}}</div>
        <table border="1" width='600px'>
      <thead>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别 </th>
      </thead>
      <tbody>
        <tr v-for="(value,index) in username" :key="index">
          <td>{{value.name}}</td>
          <td>{{value.age}}</td>
          <td>{{value.gender}}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [1, 3, 5, 6, 7],
      obj: {
        name: 'asd',
        age: '20',
        gender: '男'
      },
      username: [
        {
          name: 'asd',
          age: '20',
          gender: '男'
        },
        {
          name: 'www',
          age: '20',
          gender: '男'
        },
        {
          name: 'eee',
          age: '20',
          gender: '男'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>

</style>
