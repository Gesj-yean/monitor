<template>
  <div class="content-wrapper">
    <div class="header">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="配置项">
          <el-select
            v-model="form.configApi"
            placeholder="选择配置项"
            size="mini"
            @change="handleChangeApi"
          >
            <el-option
              v-for="item in configApi"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-tooltip :content="description" placement="top" class="desc">
        <i class="el-icon-question"></i>
      </el-tooltip>
    </div>
    <!-- <div ref="currentView"></div> -->
    <div class="component-wrapper">
      <div v-show="!currentView">
        <i class="el-icon-edit" style="font-size:35px;margin:10px"></i>
        <div>请先选择配置项</div>
      </div>
      <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { configApi } from './config'
export default {
  data () {
    return {
      configApi,
      form: {
        configApi: ''
      },
      description: '',
      currentView: ''
    }
  },
  methods: {
    handleChangeApi (value) {
      const item = this.configApi.find(item => item.value === value)
      this.description = item.desc
      console.log(value)
      try {
        this.registerComponent(value).then(component => {
          this.currentView = component
        })
      } catch (error) {
        // console.log(error)
      }
    },
    /**
      *@desc 统一加载注册组件资源
    */
    registerComponent (name) {
      const files = require.context('./form', false, /\.vue$/)
      if (files.keys().includes(`./${name}.vue`)) {
        return import('./form/' + name).then(component => { //eslint-disable-line
          return Vue.extend(component.default)
        })
      } else {
        this.$message.error('配置项暂不支持')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.content-wrapper {
  .header {
    padding: 10px;
    background: #f2f2f2;
    border-radius: 5px;
  }
}
.component-wrapper {
  padding: 20px;
  height: calc(100% - 62px);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ccc;
}
.desc {
  font-size: 20px;
  color: #409eff;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}
.demo-form-inline {
  border-bottom: solid 2px #f2f2f2;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
}
</style>
