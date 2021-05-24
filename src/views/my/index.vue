<template>
  <div class="my-wrapper">
    <div class="main-operate-wrapper">
      <div class="global-title">我的文件</div>
      <div>
        <el-button size="mini" type="primary">配置导入</el-button>
        <el-button size="mini" type="primary" @click="$router.push('/home/edit/-1')">新建</el-button>
      </div>
    </div>
    <div class="files-wrapper">
      <ul class="files">
        <li v-for="item in fileList" :key="item.id">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="line-height:20px">名称</span>
              <div>
                <el-tag size="small" style="margin-right:10px" @click="editFile(item)">编辑</el-tag>
                <el-tag type="danger" size="small" @click="deleteFile(item)">删除</el-tag>
              </div>
            </div>
            <img v-if="item.screenShot" :src="item.screenShot" height="200px" width="100%" alt />
            <div v-else class="no-screenshot">暂无大屏快照</div>
            <div>创建时间：{{ timeFormatter(item.createTime) }}</div>
          </el-card>
        </li>
      </ul>
      <template>
        <noData v-show="fileList.length===0" />
      </template>
    </div>
  </div>
</template>

<script>
import noData from '@/base/no-data/no-data'
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      fileList: 'fileList'
    })
  },
  components: {
    noData
  },
  created () {
    console.log(this.fileList.length === 0)
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
      if (time) {
        return new Date(+new Date(time) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      } else {
        return '/'
      }
    }
  }
}
</script>

<style scoped lang="less">
.my-wrapper {
  .main-operate-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .files-wrapper {
    .files {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      li {
        margin: 20px;
        width: 400px;
      }
      .no-screenshot {
        line-height: 200px;
        text-align: center;
        color: #999;
      }
    }
  }
}
.clearfix {
  display: flex;
  justify-content: space-between;
}
</style>
