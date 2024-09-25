<template>
  <form class="login-form">
    <p class="recovery" style="font-size: 22px; padding-bottom: 20px">
      Для восстановления доступа введите e-mail
    </p>
    <el-input
      placeholder="Введите логин"
      class="input-login"
      v-model="emailRecovery"
      style="width: 300px"
    />
  </form>
  <div class="links-container">

    <div>
      <el-button type="primary" class="btn-enter" @click="$router.push('/completerecovery')"
        >Отправить</el-button
      >
      <el-button type="primary" class="btn-enter" @click="$router.push('/')"
        >Вернуться</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emailRecovery = ref("");
</script>

<style scoped></style>
