<template>
  <div>
    <div>
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-s-promotion"
        class="reset-button"
        @click="resetBg"
      >重置</el-button>
    </div>

    <div class="customer mb-10">
      <div class="mr-20">自定义背景颜色：</div>
      <el-color-picker v-model="bgColor"></el-color-picker>
    </div>

    <div>自定义背景图片：</div>
    <el-upload
      class="upload-demo mt-20 mb-10"
      drag
      action="alert"
      multiple
      :on-change="uploadImg"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <div class="mt-20 mb-10">选择背景图片：</div>
    <div>
      <div v-for="(item,index) in list" :key="index" @click="addBg(item)">
        <img :src="item" alt class="img-wrapper" />
      </div>
    </div>

    <img v-show="imageUrl" :src="imageUrl" class="img-wrapper" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: [],
      imageUrl: '',
      bgColor: null
    }
  },
  created () {
    this.getImages()
  },
  methods: {

    /**
     * @description 获取本地image列表
     */
    getImages () {
      const files = require.context('@/assets/images/bg', false, /.jpg$/)
      files.keys().forEach(key => {
        this.list = files.keys().map((item) => files(item).default || files(item))
      })
    },

    /**
     * @description 重置背景
     */
    resetBg () {
      this.$emit('chooseBg', 'none')
    },

    /**
     * @description 添加背景
     * @params {String} 图片
     */
    addBg (item) {
      this.$emit('chooseBg', item)
    },
    uploadImg (file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!')
        return
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
        return
      }
      this.imageUrl = URL.createObjectURL(file.raw)
      this.$emit('chooseBg', this.imageUrl)
    }
  }
}
</script>

<style scoped lang="less">
.reset-button {
  margin-bottom: 10px;
}
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
.customer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
