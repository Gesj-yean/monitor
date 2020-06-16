<template>
  <div class="my-wrapper">
    <div class="main-operate-wrapper">
      <div class="title">我的文件</div>
      <el-button size="mini" type="primary" @click="$router.push('/home/edit')">新建</el-button>
    </div>
    <div class="files-wrapper">
      <div class="files"></div>
      <div v-show="fileList.length==0" class="no-file">
        <img src="../../assets/images/no-data.png" height="100" width="150" alt />
        <div class="info">没有文件喔~~</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: []
    }
  }
}
</script>

<style scoped lang="less">
.my-wrapper {
  .main-operate-wrapper {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 14px;
    }
  }
  .files-wrapper {
    .files {
      display: flex;
      flex-wrap: wrap;
    }
    .no-file {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .info {
        margin: 10px 0;
      }
    }
  }
}
</style>
