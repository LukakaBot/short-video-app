<template>
  <div class="bg-gray-100 h-screen">
    <wd-input type="text" v-model="videoLink" placeholder="请输入用户名" />
    <div class="flex justify-between">
      <wd-button type="primary" :round="false" @click="handlePaste">粘贴</wd-button>
      <wd-button type="primary" :round="false" @click="handleSubmit">提交</wd-button>
      <wd-button type="primary" :round="false" @click="handleClear">清空</wd-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoLink = ref('');

function handleSubmit() {
  console.log(videoLink.value);
}

function handleClear() {
  videoLink.value = '';
  uni.showToast({ title: '清空成功', icon: 'none' });
}

function handlePaste() {
  uni.getClipboardData({
    success: (res) => {
      console.log(res);
      videoLink.value = res.data;
    },
    fail: (err) => {
      console.log(err);
      uni.showToast({ title: '获取剪贴板失败', icon: 'none' });
    },
    complete: () => {
      // do something
    }
  })
}
</script>

<style></style>
