<template>
  <div>
    <el-form ref="form" :model="form" label-width="150px" label-position="left" label-suffix="：">
      <el-form-item label="是否显示图例组件" prop="show">
        <el-switch size="mini" v-model="form.show"></el-switch>
      </el-form-item>
      <el-form-item label="显示数据" prop="data">
        <el-input size="mini" v-model="form.data" placeholder="请输入要显示的图例，用空格分隔"></el-input>
      </el-form-item>
      <el-form-item label="图例的类型" prop="type">
        <el-select size="mini" v-model="form.type">
          <el-option value="plain">普通图例</el-option>
          <el-option value="scroll">可滚动翻页的图例</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="离容器左侧的距离" prop="left">
        <el-input size="mini" v-model="form.left"></el-input>
      </el-form-item>
      <el-form-item label="离容器右侧的距离" prop="right">
        <el-input size="mini" v-model="form.right"></el-input>
      </el-form-item>
      <el-form-item label="离容器上侧的距离" prop="top">
        <el-input size="mini" v-model="form.top"></el-input>
      </el-form-item>
      <el-form-item label="离容器下侧的距离" prop="bottom">
        <el-input size="mini" v-model="form.bottom"></el-input>
      </el-form-item>
      <el-form-item label="高度" prop="height">
        <el-input size="mini" v-model="form.height"></el-input>
      </el-form-item>
      <el-form-item label="宽度" prop="width">
        <el-input size="mini" v-model="form.width"></el-input>
      </el-form-item>
      <el-form-item label="布局朝向" prop="orient">
        <el-select size="mini" v-model="form.orient">
          <el-option value="horizontal">水平</el-option>
          <el-option value="vertical">垂直</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图例标记和文本的对齐" prop="align">
        <el-select size="mini" v-model="form.align">
          <el-option value="auto">自动</el-option>
          <el-option value="left">左对齐</el-option>
          <el-option value="right">右对齐</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图例内边距" prop>
        <el-input size="mini" v-model="form.padding"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'legend',
  props: {
    curEdit: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      form: {
        data: '',
        type: '',
        show: true,
        left: '',
        right: '',
        top: '',
        bottom: '',
        height: '',
        width: '',
        orient: '',
        align: '',
        padding: 5
      }
    }
  },
  computed: {
    ...mapState({
      currentChartList: 'currentChartList'
    })
  },
  watch: {
    curEdit (newVal) {
      this.changeData()
    },
    form: {
      handler (newVal) {
        this.changeChart(newVal)
      },
      deep: true
    }
  },
  mounted () {
    this.changeData()
  },
  methods: {
    ...mapMutations(['updateChart']),
    changeData () {
      this.$refs.form.resetFields()
      this.curEdit.option.legend ? this.form.show = true : this.form.show = false
      const data = this.curEdit.option.legend.data ? this.curEdit.option.legend.data.join(',') : ''
      Object.assign(this.form, this.curEdit.option.legend, { data: data })
    },
    changeChart (newVal) {
      const item = JSON.parse(JSON.stringify(this.curEdit))
      Object.assign(item.option.legend, this.form)
      this.updateChart(item)
    }
  }
}
</script>

<style scoped lang="less">
.el-form-item {
  margin-bottom: 5px;
}
</style>
