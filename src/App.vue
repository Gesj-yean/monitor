<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    this.saveStates()
  },
  methods: {
    saveStates () {
      if (sessionStorage.getItem('store')) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
      }
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('store', JSON.stringify(this.$store.state))
      })
    }
  }
}
</script>

<style lang="less">
@import './assets/style/variable.less';
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: @font-size-normal;
  color: @font-color;
}
</style>
