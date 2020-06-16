<template>
  <div>
    <Header />

    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.main-wrapper {
  position: relative;
  padding: 20px;
  min-height: calc(100vh - 101px);
}
</style>
