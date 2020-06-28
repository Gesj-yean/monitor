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
    <div class="desc" v-show="description">
      <i class="el-icon-question"></i>
      {{description}}
    </div>
  </div>
</template>
<script>
import { configApi } from './config'
export default {
  data () {
    return {
      configApi,
      form: {
        configApi: ''
      },
      description: ''
    }
  },
  methods: {
    handleChangeApi (value) {
      const item = this.configApi.find(item => item.value === value)
      this.description = item.desc
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
