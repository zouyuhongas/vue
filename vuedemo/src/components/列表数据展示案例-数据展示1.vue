
<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="brand.id" ref="id" v-mycolor='"red"'/> 品牌名称:
      <input type="text" v-model="brand.name" ref="name" v-myFocus v-mycolor='"pink"'/>
      <input type="button" value="添加" @click="add" ref="btn">
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="userkey"/>

      <!-- <input type="text" v-focus>
      <input type="text" > -->
    </div>
    <div>
      <table class="tb">
        <tbody>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="(value,index) in search" :key="index" >
            <td>{{value.id}}</td>
            <td>{{value.name}}</td>
            <td>{{value.time | timeFormat('/')}}</td>
            <td>
              <a href="#" @click.prevent='del(index)'>删除</a>
            </td>
          </tr>
          <tr>
              <td colspan="4" v-show="search.length == 0">没有任何数据请先添加数据</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { myfocus, mycolor } from '@/tools/myfoo.js'
import { timeFormat } from '@/tools/userFilters.js'
export default {
  data () {
    return {
      userkey: '',
      brand: {
        id: '',
        name: ''
      },
      brandList: [
        {
          id: '1',
          name: '本田',
          time: new Date()
        },
        {
          id: '2',
          name: '丰田',
          time: new Date()
        },
        {
          id: '3',
          name: '日产',
          time: new Date()
        }
      ]
    }
  },
  computed: {
    search () {
      var arr = []
      for (var i = 0; i < this.brandList.length; i++) {
        if (this.brandList[i].name.indexOf(this.userkey) !== -1) {
          arr.push(this.brandList[i])
        }
      }
      return arr
    }
  },
  methods: {
    del (index) {
      this.brandList.splice(index, 1)
    },
    add () {
      this.brand.time = new Date()
      this.brandList.push(this.brand)
    }
  },
  directives: {
    myFocus: myfocus,
    mycolor
  },
  filters: {
    timeFormat
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
