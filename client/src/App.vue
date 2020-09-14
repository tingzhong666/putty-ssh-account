<template>
  <div id="app">
    <div class="card">
      <div class="title">PUTTY账号管理</div>

      <div class="msg" v-text="msg" v-show="!!msg"></div>

      <div class="exe-path">
        <label for="exe">putty.exe路径*：</label>
        <input name="exe" type="text" v-model="exePath"/>
      </div>

      <List :list="list" @change="change" ref="list"/>

      <Editor v-bind="infor" @change="ed"/>

      <button class="submit" @click="submit">save and connect</button>
    </div>
  </div>
</template>

<script>
import List from './components/list.vue'
import Editor from './components/editor.vue'
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_URL

export default {
  data () {
    return {
      list: [],
      exePath: '',
      infor: {
        ip: '',
        password: '',
        username: '',
        port: 22,
        remark: '',
        id: null
      },
      msg: '',
      index: -1
    }
  },
  components: {
    List,
    Editor
  },
  methods: {
    setInfor (obj) {
      for (const k in this.infor) {
        this.infor[k] = obj[k]
      }
    },
    clearInfor () {
      this.infor = {
        ip: '',
        password: '',
        username: '',
        port: 22,
        remark: '',
        id: null
      }
    },
    // 双向绑定 Editor 组件
    ed (k, v) {
      this.infor[k] = v
    },
    // 初始化
    async init () {
      const res = await axios.get('/list')
      this.exePath = res.data.data.path
      this.list = res.data.data.list

      if (this.list.length) this.setInfor(this.list[0])
    },
    // 列表索引
    change (i) {
      this.index = i
      if (i === -1) this.clearInfor()
      else this.infor = this.list[i]
    },
    // 连接 点击按钮 保存提交
    async submit () {
      const res = await axios.post('/connect', { ...this.infor, path: this.exePath })
      this.msg = res.data.msg

      if (res.data.code === 1) {
        this.exePath = res.data.data.path
        this.list = res.data.data.list
      }

      // 新增 则
      if (res.data.code === 1 && this.index === -1) this.$refs.list.change(this.list.length - 1)
    }
  },
  async created () {
    this.init()
  }
}
</script>

<style lang="stylus">
@import "~@/assets/base.css"
space = 20px
bgc = #fff
card-bgc = #fff
border = #eee
color = #555

input
  height 2rem
  font-size 1rem

#app
  background-color bgc
  padding space 0
  color color
  font-weight 600
  .card
    width 800px
    margin 0 auto
    background-color card-bgc
    display flex
    flex-flow row wrap
    justify-content space-around
    padding space
    border 1px solid border
    border-radius 5px
    box-shadow 3px 3px 15px 5px rgba(0,0,0,0.3)
    .title
      background-color #000
      color #fff
      line-height 150px
      text-align center
      font-size 30px
      width 100%
      height 150px
      margin-bottom space
    .msg
      color red
      text-align center
      margin-bottom space
      border 1px solid red
      border-radius 5px
      padding (space / 2) 0
    .exe-path
      width @width - space * 2
      margin-bottom space
      border-bottom 2px solid #000
      padding-bottom space
      line-height 2rem
      input
        width  @width* 0.8
        padding 0 10px
      label
        width  @width* 0.2
    .submit
      width 100%
      font-weight 600
      font-size 1rem
      line-height 50px
      background-color #000
      color #fff
      cursor pointer
      transition .2s ease
      transition-property transform, background-color
      margin-top space
      &:hover
        background-color #000 + 25
      &:active
        transform scale(0.97)
</style>
