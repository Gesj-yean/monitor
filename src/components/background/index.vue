<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img :src="item" alt class="img-wrapper" />
      </li>
    </ul>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getImages()
  },
  methods: {
    getImages () {
      const files = require.context('@/assets/images/bg', false, /.jpg$/)
      files.keys().forEach(key => {
        this.list = files.keys().map((item) => files(item).default || files(item))
      })
    }
  }
}
</script>

<style scoped lang="less">
.img-wrapper {
  margin: 3px 0;
  height: 60px;
  width: 300px;
  border-radius: 10px;
}
.upload-demo {
  /deep/ .el-upload-dragger {
    width: 300px;
  }
}
</style>
