<template>
  <wd-config-provider :theme-vars="themeVars">
    <div class="flex flex-col h-100vh">
      <wd-swiper :list="swiperList" autoplay v-model:current="current" :indicator="indicator" />
      <div class="flex-1 py-20rpx px-20rpx bg-red-100">
        <div class="bg-#fff border-solid border-1px border-gray-300 border-rd-10rpx overflow-hidden">
          <wd-textarea v-model="videoLink" placeholder="请粘贴视频/图片地址" :maxlength="200" show-word-limit />
        </div>
        <div class="flex gap-x-20rpx pt-20rpx">
          <wd-button type="error" :round="false" block plain :disabled="isNoLink" @click="handleClear">清空</wd-button>
          <wd-button type="info" :round="false" block plain @click="handlePaste">粘贴</wd-button>
          <wd-button type="primary" :round="false" block plain :disabled="isNoLink" @click="handleSubmit">提交</wd-button>
        </div>
      </div>
    </div>
  </wd-config-provider>
</template>

<script setup lang="ts">
import type { ConfigProviderThemeVars } from 'wot-design-uni';

const themeVars: ConfigProviderThemeVars = {
  swiperRadius: '0'
};

const current = ref(0);

const swiperList = [
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg'
];

const indicator = { type: 'dots-bar' };

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
      console.log(res.data.trim());

      videoLink.value = res.data.trim();
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

const isNoLink = computed(() => !videoLink.value);
</script>

<style scoped>
:deep(.wd-button) {
  width: 100% !important;
}
</style>
