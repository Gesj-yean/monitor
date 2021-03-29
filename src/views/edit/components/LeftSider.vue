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
          @click="selectClick(item)"
        >
          <img
            :src="require(`@/assets/images/echarts-icon/${item.icon}`)"
            height="19"
            width="19"
            class="icon-wrapper"
          />
          {{item.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2" @click="selectClick({type:'background'})">
        <i class="el-icon-menu"></i>
        <span slot="title">背景</span>
      </el-menu-item>
      <el-menu-item index="3" @click="selectClick({type:'theme'})">
        <i class="el-icon-edit"></i>
        <span slot="title">主题</span>
      </el-menu-item>
      <el-menu-item index="4" @click="importChart">
        <i class="el-icon-upload"></i>
        <span slot="title">导入</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { charts } from '@/assets/js/constants/index'
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
    selectClick (item) {
      console.log(item)
      item.name && this.$message.success(`「${item.name}」添加成功`)
      this.$emit('addChart', item.type)
    },

    /**
     * @description 处理通过导入配置生成图表
     */
    importChart () {
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
  box-shadow: 2px 5px 10px #999;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  }
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
.icon-wrapper {
  height: 19px;
  width: 19px;
  margin-right: 10px;
}
</style>
