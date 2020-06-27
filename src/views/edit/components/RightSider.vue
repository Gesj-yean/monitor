<template>
  <drawer>
    <background v-if="addChartType==='background'" @chooseBg="handleChooseBg" />
  </drawer>
</template>

<script>
import drawer from '@/base/drawer/drawer'
import background from '@/components/background/index'
export default {
  components: {
    drawer,
    background
  },
  props: {
    addChartType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showPage: true
    }
  },
  methods: {
    handleChooseBg (item) {
      this.$emit('chooseBg', item)
    }
  }
}
</script>

<style scoped lang="less">
</style>
