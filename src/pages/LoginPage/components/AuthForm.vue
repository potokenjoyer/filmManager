<template>
  <el-input v-model="email" class="input-login" placeholder="Введите email" />
  <el-input
    v-model="pass"
    class="input-password"
    type="password"
    placeholder="Введите пароль"
    show-password
  />
  <el-button type="primary" class="btn-enter" size="large" @click="login">
    Вход
  </el-button>

  <div class="links-container">
    <div>
      <el-link type="primary" @click="$router.push({ name: 'pass-recovery' })">
        Забыли пароль?
      </el-link>
    </div>
    <div>
      <el-link type="primary" @click="$router.push({ name: 'registration' })">
        Зарегистрироваться
      </el-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const $router = useRouter();

const email = ref("");
const pass = ref("");

async function login() {
  const responce = await axios.post("http://localhost:3031/api/auth/login", {
    email: login.value,
    password: pass.value,
  });
  console.log(responce);
  $router.push({
    name: "films",
  });
}
</script>

<style scoped></style>
