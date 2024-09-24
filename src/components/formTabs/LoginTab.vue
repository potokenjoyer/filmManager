<template>
  <div class="form">
    <h1 class="logo">fWatch</h1>
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

      <el-button type="primary" class="btn-enter">Вход</el-button>
    </form>
    <div class="links-container">
      <div>
        <button
          v-for="(_, tab) in tabs"
          :key="tab"
          :class="[{ active: currentTab === tab }]"
          @click="(currentTab = tab), console.log(currentTab)"
        >
          123
        </button>
        <el-link type="primary">123</el-link>
      </div>
      <div><el-link type="primary">Зарегистрироваться</el-link></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputPass = ref("");
const inputLogin = ref("");
</script>

<style scoped></style>
