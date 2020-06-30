<template>
  <div>
    <el-form ref="form" :model="form" label-width="150px" label-position="left" label-suffix="：">
      <el-form-item label="图例的类型">
        <el-select size="mini" v-model="form.type">
          <el-option value="plain">普通图例</el-option>
          <el-option value="scroll">可滚动翻页的图例</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否显示图例组件">
        <el-switch size="mini" v-model="form.show"></el-switch>
      </el-form-item>
      <el-form-item label="离容器左侧的距离">
        <el-input size="mini" v-model="form.left"></el-input>
      </el-form-item>
       <el-form-item label="离容器右侧的距离">
        <el-input size="mini" v-model="form.right"></el-input>
      </el-form-item>
       <el-form-item label="离容器上侧的距离">
        <el-input size="mini" v-model="form.top"></el-input>
      </el-form-item>
       <el-form-item label="离容器下侧的距离">
        <el-input size="mini" v-model="form.bottom"></el-input>
      </el-form-item>
      <el-form-item label="高度">
        <el-input size="mini" v-model="form.height"></el-input>
      </el-form-item>
      <el-form-item label="宽度">
        <el-input size="mini" v-model="form.width"></el-input>
      </el-form-item>
      <el-form-item label="布局朝向">
        <el-select size="mini" v-model="form.orient">
          <el-option value="horizontal">水平</el-option>
          <el-option value="vertical">垂直</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图例标记和文本的对齐">
         <el-select size="mini" v-model="form.align">
          <el-option value="auto">自动</el-option>
          <el-option value="left">左对齐</el-option>
          <el-option value="right">右对齐</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图例内边距">
        <el-input size="mini" v-model="form.padding"></el-input>
      </el-form-item>
     
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'legend',
  data () {
    return {
      form: {
        type:'',
        show: true,
        left: '',
        right: '',
        top: '',
        bottom: '',
        height: '',
        width: '',
        orient: '',
        align: true,
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
