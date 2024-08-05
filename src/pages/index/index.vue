<template>
  <div>
    <wd-input type="text" v-model="link" placeholder="请输入用户名" />
    <wd-button type="primary" @click="handleSubmit">提交</wd-button>
  </div>
</template>

<script setup lang="ts">
const link = ref('');

function handleSubmit() {
  console.log(link.value);
}
</script>

<style></style>
