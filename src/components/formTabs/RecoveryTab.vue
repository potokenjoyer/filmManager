<template>
  <div class="form">
    <h1 class="logo">fWatch</h1>
    <p class="recovery">Для восстановления доступа введите e-mail</p>
    <form class="login-form" :click="checkValue">
      <el-input
        placeholder="Введите email"
        class="input-login"
        v-model="emailRecovery"
      />

      <el-button type="primary" class="btn-enter">Отправить</el-button>
    </form>
    <div class="links-container">
      <div>
        <el-link type="primary">Вернуться</el-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emailRecovery = ref("");
</script>

<style scoped>
.form {
  position: relative;
  background: #ffffff;
  padding: 45px;
  padding-bottom: 10px;
  text-align: center;
  border-radius: 10px;
}
.logo {
  font-size: 42px;
  font-weight: bold;
  font-family: Roboto;
  color: #409eff;
  padding-bottom: 20px;
}
.recovery {
  color: #409eff;
  padding-bottom: 10px;
}

.input-login {
  padding-bottom: 12px;
  width: 300px;
}
</style>
