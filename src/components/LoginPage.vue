<template>
  <div class="login-page">
    <div class="form">
      <h1 class="logo">fWatch</h1>
      <form class="login-form">
        <!-- Login -->
        <el-input
          placeholder="Введите логин"
          class="input-login"
          v-model="inputLogin"
        />
        <!-- Password -->
        <el-input
          v-model="inputPass"
          class="input-password"
          type="password"
          placeholder="Введите пароль"
          show-password
        />
        <el-button type="primary" class="btn-enter">Вход</el-button>
      </form>
      <div class="links-container">
        <div><el-link type="primary">Забыли пароль?</el-link></div>
        <div><el-link type="primary">Зарегистрироваться</el-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const inputPass = ref("");
const inputLogin = ref("");
</script>

<style>
.logo {
  font-size: 42px;
  font-weight: bold;
  font-family: Roboto;
  color: #409eff;
  padding-bottom: 20px;
}
.links-container {
  padding: 20px;
}

.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
.forgot-pass-link {
  color: black;
}
.registration-link {
  color: black;
}
.login-page {
  width: 400px;
  margin: auto;
}
.form {
  position: relative;
  background: #ffffff;
  padding: 45px;
  padding-bottom: 10px;
  text-align: center;
  border-radius: 10px;
}

.input-login {
  padding-bottom: 12px;
  width: 300px;
}
.input-password {
  padding-bottom: 20px;
  width: 300px;
}
</style>
