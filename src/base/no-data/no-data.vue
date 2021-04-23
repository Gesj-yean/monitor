<template>
  <div class="no-file">
    <img src="../../assets/images/no-data.png" height="150" width="150" alt />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
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
</style>
