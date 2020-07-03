<template>
  <div class="edit-wrapper">
    <Header @handleFullScreen="handleFullScreen" :theme="theme" />
    <div class="content-wrapper">
      <LeftSider @addChart="addChart" @openImportDialog="openImportDialog" />
      <Center
        ref="center"
        :addChartType="addChartType"
        :config="config"
        :backgroundImg="backgroundImg"
        :theme="theme"
      />
      <RightSider
        :addChartType="addChartType"
        @chooseBg="handleChooseBg"
        @selectTheme="selectTheme"
      />
    </div>
    <el-dialog
      title="导入图表配置"
      :visible.sync="dialogVisible"
      width="50%"
      :modal-append-to-body="false"
    >
      <el-input
        type="textarea"
        :rows="15"
        placeholder="请粘贴echarts提供的图表配置选项option于此"
        v-model="options"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="importOptions">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Header from './components/Header'
import LeftSider from './components/LeftSider'
import Center from './components/Center'
import RightSider from './components/RightSider'
import screenfull from 'screenfull'

export default {
  data () {
    return {
      addChartType: '',
      dialogVisible: false,
      options: '',
      config: '',
      configType: '',
      backgroundImg: '',
      theme: ''
    }
  },

  created () {
  },

  methods: {
    /**
     * @description 全屏
     */
    handleFullScreen () {
      if (screenfull.isEnabled) {
        screenfull.request(this.$refs.center.$el)
      }
    },

    /**
     * @description 响应添加图表
     * @params {String} 图表类型
     */
    addChart (type) {
      this.addChartType = type
    },

    /**
     * @description 导入配置项
     */
    openImportDialog () {
      this.dialogVisible = true
    },

    /**
     * @description 响应对话框确定
     */
    importOptions () {
      if (!this.options) {
        this.$message.error('配置项不能为空')
      } else {
        this.config = this.options
        this.options = ''
        this.dialogVisible = false
      }
    },

    /**
     * @description 传递背景
     * @params {String} 图片
     */
    handleChooseBg (item) {
      this.backgroundImg = item
    },
    selectTheme (name) {
      this.theme = name
    }
  },

  components: {
    Header,
    LeftSider,
    Center,
    RightSider
  }
}
</script>

<style lang="less">
.edit-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  .content-wrapper {
    height: 100%;
    width: 100%;
  }
}
</style>
