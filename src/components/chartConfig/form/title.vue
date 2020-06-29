<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="是否显示标题组件">
        <el-switch size="mini" v-model="form.show"></el-switch>
      </el-form-item>
      <el-form-item label="标题文本">
        <el-input size="mini" v-model="form.text"></el-input>
      </el-form-item>
      <el-form-item label="主标题文本超链接">
        <el-input size="mini" v-model="form.link"></el-input>
      </el-form-item>
      <el-form-item label="指定窗口打开主标题超链接">
        <el-select size="mini" v-model="form.target">
          <el-option value="self">当前窗口打开</el-option>
          <el-option value="blank">新窗口打开</el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'title',
  data () {
    return {
      form: {
        show: true,
        text: '',
        link: '',
        target: ''
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>
