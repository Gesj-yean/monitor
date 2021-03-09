<template>
  <div class="my-wrapper">
    <div class="main-operate-wrapper">
      <div class="title">我的文件</div>
      <div>
        <el-button size="mini" type="primary">配置导入</el-button>
        <el-button size="mini" type="primary" @click="$router.push('/home/edit/-1')">新建</el-button>
      </div>
    </div>
    <div class="files-wrapper">
      <ul class="files">
        <li v-for="item in fileList" :key="item.createTime">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="line-height:20px">名称</span>
              <div>
                <el-tag size="small" style="margin-right:10px" @click="editFile(item)">编辑</el-tag>
                <el-tag type="danger" size="small" @click="deleteFile(item)">删除</el-tag>
              </div>
            </div>
            <div>创建时间：{{ timeFormatter(item.createTime) }}</div>
          </el-card>
        </li>
      </ul>
      <div v-show="fileList.length==0" class="no-file">
        <img src="../../assets/images/no-data.png" height="100" width="150" alt />
        <div class="info">没有文件喔~~</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      fileList: 'fileList'
    })
  },
  methods: {
    ...mapMutations(['fileListDelete']),
    editFile (item) {
      this.$router.push(`/home/edit/${item.id}`)
    },
    deleteFile (item) {
      this.$confirm('是否删除改图表?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.fileListDelete(item)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => { })
    },
    timeFormatter (time) {
      return new Date(+new Date(time) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
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
      justify-content: start;
      li {
        margin: 20px;
        width: 30%;
      }
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
.clearfix {
  display: flex;
  justify-content: space-between;
}
</style>
