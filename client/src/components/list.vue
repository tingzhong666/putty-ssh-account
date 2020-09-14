<template>
  <div class="component">
    <button :class="{ active: index === -1 }" @click="change(-1)">+新增</button>
    <button
      :class="{ active: i === index }" v-for="(v, i) in list"
      :key="i"
      v-text="v.remark || v.ip"
      @click="change(i)"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: -1,
      isInit: true
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    list (newV, oldV) {
      if (newV.length && this.isInit) {
        this.index = 0
        this.isInit = false
      }
    },
    index: {
      handler: function (newV, old) {
        this.$emit('change', newV)
      },
      immediate: true
    }
  },
  methods: {
    change (i) {
      this.index = i
    }
  }
}
</script>

<style scoped lang="stylus">
.component
  width 350px
  border-right 2px solid #000
  button
    line-height 2rem
    background-color #fff
    padding 0 10px
    cursor pointer
    width 100%
    text-align left
    transition .2s ease
    transition-property background-color, transform
    &:hover
    &.active
    &:focus
      background-color rgba(0, 0, 0, .1)
    &.active
      transform scale(0.97)
</style>
