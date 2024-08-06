<template>
  <div>
    <template v-if="isLocalIcon">
      <wd-icon :name="iconName" :color="color" :size="size + 'rpx'" />
    </template>
    <template v-else>
      <Icon :icon="icon" :width="size" :height="size" :color="color" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

type Props = {
  /** 图标名称 */
  icon: string;
  /** 图标颜色 */
  color?: string;
  /** 图标大小 */
  size?: number;
};

const props = withDefaults(defineProps<Props>(), {
  color: '#000',
  size: 16,
});

const iconName = computed(() => `/static/svg/${props.icon}.svg`);

/** 是否渲染本地图标 */
const isLocalIcon = computed(() => props.icon.startsWith('icon-'));
</script>

<style scoped></style>