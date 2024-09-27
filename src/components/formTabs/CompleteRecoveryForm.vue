<template>
  <form class="login-form">
    <p class="recovery" style="font-size: 22px; padding-bottom: 20px">
      Письмо с восстановлением отправлено на указанную почту
    </p>
  </form>
  <div class="links-container">
    <div>
      <el-button
        type="primary"
        :icon="ArrowLeft"
        class="btn-enter"
        @click="$router.push('/')"
        >Вернуться</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft } from "@element-plus/icons-vue";
</script>

<style scoped></style>
