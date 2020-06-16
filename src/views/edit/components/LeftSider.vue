<template>
  <div class="left-wrapper">
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基础图表</span>
        </template>
        <el-menu-item
          v-for="(item,index) in charts"
          :key="index"
          :index="item.name"
          @click="selectClick(item.type)"
        >{{item.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">背景</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-edit"></i>
        <span slot="title">标题</span>
      </el-menu-item>
      <el-menu-item index="4" @click="importChart">
        <i class="el-icon-upload"></i>
        <span slot="title">导入</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { charts } from '@/constants/charts'
export default {
  data () {
    return {
      charts
    }
  },
  created () {
  },
  methods: {

    /**
     * @description 选择图表
     * @params {String} 图表类型
     */
    selectClick (type) {
      this.$emit('addChart', type)
    },

    /**
     * @description 处理通过导入配置生成图表
     */
    importChart () {
      console.log('111')
      this.$emit('openImportDialog')
    }
  }
}
</script>

<style lang="less" scoped>
.left-wrapper {
  height: 100%;
  width: 200px;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  background: #fff;
  box-shadow: 5px 5px 15px #eee;
  .title {
    margin: 20px;
  }
  .list-wrapper {
    .item {
      padding: 10px 20px;
      line-height: 30px;
      &:hover {
        color: cornflowerblue;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
}
</style>
