<template>
  <div class="component">
    <div class="label">ip*：</div>
    <input @input="change($event, 'ip')" name="ip" type="text" :value="ip"/>

    <div class="label">username：</div>
    <input @input="change($event, 'username')" name="username" type="text" :value="username"/>

    <div class="label">password*：</div>
    <input @input="change($event, 'password')" name="password" type="text" :value="password"/>

    <div class="label">port：</div>
    <input @input="change($event, 'port')" name="port" type="Number" :value="port"/>

    <div class="label">备注：</div>
    <input @input="change($event, 'remark')" name="remark" type="text" :value="remark"/>
  </div>
</template>

<script>
export default {
  props: {
    ip: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    },
    port: {
      type: Number,
      default: 22
    },
    remark: {
      type: String,
      default: ''
    }
  },
  methods: {
    change (e, k) {
      let v = e.target.value
      if (k === 'port') v = v * 1
      this.$emit('change', k, v)
    }
  }
}
</script>

<style lang="stylus" scoped>
.component
  width 350px
  .label
    margin-bottom 10px
  input
    margin-bottom 10px
    width 100%
</style>
