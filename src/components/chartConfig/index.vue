<template>
  <div>
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
    <!-- <div class="desc" v-show="description">
      <i class="el-icon-question"></i>
      {{description}}
    </div>-->
    <!-- <div ref="currentView"></div> -->
    <component v-bind:is="currentView"></component>
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
.desc {
  letter-spacing: 1px;
  line-height: 15px;
}
</style>
