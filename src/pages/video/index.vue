<template>
  <div>
    <video id="myVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" @error="loadVideoError"
      controls></video>
  </div>
</template>

<script setup lang="ts">
function loadVideoError() {
  console.log('视频加载失败');
}
</script>

<style scoped></style>