<template>
  <div>
    <div class="name">配色方案</div>
    <ul class="big-wrapper">
      <li
        v-for="item in colorTheme"
        :key="item.name"
        class="big-box"
        :style="`background:${item.background}`"
        @click="selectTheme(item.name)"
      >
        <ul class="small-wrapper">
          <li
            v-for="(color,index) in item.colors"
            :key="index"
            class="small-box"
            :style="`background:${color}`"
          ></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colorTheme: [
        {
          name: 'vintage',
          background: '#fef8ef',
          colors: ['#919e8b', '#d87c7c', '#d7ab82', '#6e7074']
        },
        {
          name: 'dark',
          background: '#333',
          colors: ['#dd6b66', '#d87c7c', '#d7ab82', '#6e7074']
        },
        {
          name: 'westeros',
          background: '#fff',
          colors: ['#516b91', '#59c4e6', '#edafda', '#93b7e3']
        },
        {
          name: 'wonderland',
          background: '#fff',
          colors: ['#4ea397', '#22c3aa', '#7bd9a5', '#d0648a']
        },
        {
          name: 'purple-passion',
          background: '#5b5c6e',
          colors: ['#8a7ca8', '#e098c7', '#8fd3e8', '#71669e']
        }
      ]
    }
  },
  methods: {
    selectTheme(theme) {
      this.$emit('selectTheme', theme)
    }
  }
}
</script>

<style scoped lang="less">
.name {
  line-height: 40px;
  font-size: 16px;
}
.big-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  .big-box {
    margin: 5px 0 10px;
    padding: 5px;
    border-radius: 5px;
    border: solid 1px #eee;
    width: 40%;
    margin-right: 15px;
    .small-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .small-box {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
