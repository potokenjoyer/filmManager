<template>
  <form class="login-form">
    <el-input
      placeholder="Введите логин"
      class="input-login"
      v-model="inputLogin"
    />
    <el-input
      v-model="inputPass"
      class="input-password"
      type="password"
      placeholder="Введите пароль"
      show-password
    />

    <el-button type="primary" class="btn-enter" @click="login">Вход</el-button>
  </form>
  <div class="links-container">
    <div>
      <el-link type="primary" @click="$router.push('/recovery')"
        >Забыли пароль?</el-link
      >
    </div>
    <div>
      <el-link type="primary" @click="$router.push('/registration')"
        >Зарегистрироваться</el-link
      >
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const inputLogin = ref("");
const inputPass = ref("");

async function login() {
const responce = await axios.post('http://localhost:3031/api/auth/login', {
  email: inputLogin.value, password:inputPass.value
})
console.log(responce)
}





</script>

<style scoped></style>
