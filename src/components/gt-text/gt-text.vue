<template>
  <div class="text-layout" :style="customStyleObj">{{content}}</div>
</template>

<script>
import deleteProps from '@/utils/deleteProps'

export default {
  name: 'Text',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    content () {
      const { models: { textContent } } = this.config
      return textContent.text || '文本内容'
    },
    customStyleObj () {
      const { models: { textContent } } = this.config
      return { ...deleteProps(textContent, ['text']) }
    }
  },
  created () {
    console.log(this.config)
  }
}
</script>

<style lang="less" scoped>
.text-layout {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: move;
}
</style>
