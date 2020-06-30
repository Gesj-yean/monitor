<template>
  <div>
    <el-form ref="form" :model="form" label-width="150px" label-position="left" label-suffix="：">
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
      <el-form-item label="副标题文本">
        <el-input size="mini" v-model="form.subtext"></el-input>
      </el-form-item>
      <el-form-item label="副标题文本超链接">
        <el-input size="mini" v-model="form.sublink"></el-input>
      </el-form-item>
      <el-form-item label="指定窗口打开副标题超链接">
        <el-select size="mini" v-model="form.subtarget">
          <el-option value="self">当前窗口打开</el-option>
          <el-option value="blank">新窗口打开</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="整体（包括 text 和 subtext）的水平对齐">
        <el-select size="mini" v-model="form.textAlign">
          <el-option value="auto">自动</el-option>
          <el-option value="top">顶部</el-option>
          <el-option value="bottom">底部</el-option>
          <el-option value="middle">中间</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="整体（包括 text 和 subtext）的垂直对齐">
        <el-select size="mini" v-model="form.textVerticalAlign">
          <el-option value="auto">自动</el-option>
          <el-option value="top">顶部</el-option>
          <el-option value="bottom">底部</el-option>
          <el-option value="middle">中间</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否触发事件">
        <el-switch size="mini" v-model="form.triggerEvent"></el-switch>
      </el-form-item>
      <el-form-item label="标题内边距">
        <el-input size="mini" v-model="form.padding" placeholder="单位px，默认各方向内边距为5，接受数组分别设定上右下左边距"></el-input>
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
        target: '',
        sublink: '',
        subtarget: '',
        textAlign: '',
        textVerticalAlign: '',
        triggerEvent: true,
        padding: 5
      }
    }
  }
}
</script>

<style scoped lang="less">
.el-form-item {
  margin-bottom: 5px;
}
</style>
