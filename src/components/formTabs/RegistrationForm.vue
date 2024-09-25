<template>
  <h2 style="color: #409eff; padding-bottom: 15px">
    Заполните форму для регистрации
  </h2>
  <form class="login-form" style="width: 350px; margin: 0 auto">
    <el-input
      placeholder="Как вас зовут?"
      class="input-login"
      v-model="userName"
    />
    <el-input
      v-model="email"
      class="input-login"
      placeholder="Введите вашу почту"
    />
    <el-input
      placeholder="Придумайте логин"
      class="input-login"
      v-model="login"
    />
    <el-input
      v-model="password"
      class="input-login"
      placeholder="Придумайте пароль"
    />
    <div style="padding-bottom: 20px; padding-top: 10px;">
      <el-button type="primary" class="btn-enter" @click="$router.push('/completereg')">Зарегистрироваться</el-button>
    </div>
    <div style="padding-bottom: 20px;">
      <el-button type="primary" class="btn-enter"  @click="$router.push('/')">Вернуться</el-button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
const password = ref("");
const userName = ref("");
const login = ref("");
</script>

<style scoped></style>
