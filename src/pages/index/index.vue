<template>
  <wd-config-provider :theme-vars="themeVars">
    <wd-swiper :list="swiperList" autoplay v-model:current="current" :indicator="indicator"
      :customStyle="swiperBodyStyle" />
    <div class="pt-20rpx px-20rpx h-screen bg-red-100">
      <wd-input type="text" v-model="videoLink" placeholder="请输入用户名" />
      <div class="flex gap-x-20rpx pt-20rpx">
        <wd-button type="primary" :round="false" block plain @click="handlePaste">粘贴</wd-button>
        <wd-button type="primary" :round="false" block plain @click="handleSubmit">提交</wd-button>
        <wd-button type="primary" :round="false" block plain @click="handleClear">清空</wd-button>
      </div>
      <BaseIcon icon="ep:apple" :size="20" />
    </div>
  </wd-config-provider>
</template>

<script setup lang="ts">
import type { ConfigProviderThemeVars } from 'wot-design-uni';

const themeVars: ConfigProviderThemeVars = {
  swiperRadius: '0'
};

const current = ref(0);

const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg'
]);

const indicator = { type: 'dots-bar' };

const swiperBodyStyle = {
  borderRadius: 0
};

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

<style scoped>
:deep(.wd-button) {
  width: 100% !important;
}
</style>
