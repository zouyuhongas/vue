
<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="brand.id" v-mycolor='"red"'/>
      品牌名称:
      <input type="text" v-model="brand.bname" v-myFocus v-mycolor='"pink"'/>
      <input type="button" value="添加" @click="add"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="userkey"/>
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
          <tr v-for="(value,index) in search" :key="index">
            <td>{{value.id}}</td>
            <td>{{value.bname}}</td>
            <td>{{value.time | timeFormat('-')}}</td>
            <td>
              <a href="#" @click.prevent="del(index)">删除</a>
            </td>
          </tr>
          <tr>
              <td colspan="4" v-show="search.length == 0">没有数据了请添加数据</td>
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
        bname: ''
      },
      brandlist: [
        {
          id: '1',
          bname: '卢本伟',
          time: new Date()
        },
        {
          id: '2',
          bname: 'white',
          time: new Date()
        },
        {
          id: '3',
          bname: '五五开',
          time: new Date()
        }

      ]

    }
  },
  //   实现数据添加
  methods: {
    del (index) {
      this.brandlist.splice(index, 1)
    },
    add () {
      this.brand.time = new Date()
      this.brandlist.push(this.brand)
    }
  },
  //   创建全局自定义指令
  directives: {
    myFocus: myfocus,
    mycolor
  },
  //   添加过滤器
  filters: {
    timeFormat
  },
  //   添加计算属性
  computed: {
    search () {
      var arr = []
      for (var i = 0; i < this.brandlist.length; i++) {
        if (this.brandlist[i].bname.indexOf(this.userkey) !== -1) {
          arr.push(this.brandlist[i])
        }
      }
      return arr
    }
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
