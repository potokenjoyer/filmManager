<template>
  <h2 style="color: #409eff; padding-bottom: 15px">
    Вы успешно зарегистрированы
  </h2>
  <form class="login-form" style="width: 350px; margin: 0 auto">
    <div style="padding-bottom: 20px">
      <el-button
        type="primary"
        :icon="ArrowLeft"
        class="btn-enter"
        @click="$router.push('/')"
        >Вернуться</el-button
      >
    </div>
  </form>
</template>

<script setup>
import { ArrowLeft } from "@element-plus/icons-vue";
</script>

<style scoped></style>
