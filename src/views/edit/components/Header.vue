<template>
  <div class="header-wrapper">
    <div class="left"></div>
    <div class="right">
      <el-button size="mini" icon="el-icon-rank" @click="handleFullScreen">全屏</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
const _ = require('lodash')

export default {
  props: {
    theme: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState({
      currentChartList: 'currentChartList',
      fileList: 'fileList',
      originChartList: 'originChartList'
    })
  },
  data () {
    return {
      currentFileId: +this.$route.params.id
    }
  },
  created () {
    this.currentFileId !== -1 && this.recordOriginChartList(this.currentFileId)
  },
  watch: {
    theme (newVal, oldVal) {
      if (newVal !== oldVal) {
        const { currentFileId, fileList } = this
        const index = fileList.findIndex(i => i.id === currentFileId)
        if (index > -1) {
          const params = _.cloneDeep(fileList)
          params.splice(index, 1, { ...fileList[index], theme: newVal })
          this.fileListUpdate(params)
        }
      }
    },
    background (newVal, oldVal) {
      if (newVal !== oldVal) {
        const { currentFileId, fileList } = this
        const index = fileList.findIndex(i => i.id === currentFileId)
        if (index > -1) {
          const params = _.cloneDeep(fileList)
          params.splice(index, 1, { ...fileList[index], background: newVal })
          this.fileListUpdate(params)
        }
      }
    }
  },
  methods: {
    ...mapMutations(['fileListUpdate', 'fileListAdd', 'setCurrentChartList', 'recordOriginChartList', 'restoreOriginChartList']),
    /**
     * @description 响应全屏
     */
    handleFullScreen () {
      this.$emit('handleFullScreen')
    }
  }
}
</script>

<style lang="less" scoped>
.header-wrapper {
  padding: 0 20px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #2d3c53;
}
</style>
