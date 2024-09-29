<template>
  <ElInput
    v-model="email"
    class="input-login"
    placeholder="Введите email" />
  <ElInput
    v-model="pass"
    class="input-password"
    type="password"
    placeholder="Введите пароль"
    show-password />
  <ElButton
    type="primary"
    class="btn-enter"
    size="large"
    @click="login">
    Вход
  </ElButton>

  <div class="links-container">
    <div>
      <ElLink
        type="primary"
        @click="$router.push({ name: 'login' })">
        Забыли пароль?
      </ElLink>
    </div>
    <div>
      <ElLink
        type="primary"
        @click="$router.push({ name: 'registration' })">
        Зарегистрироваться
      </ElLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import axios from "axios";
  
  const $router = useRouter();

  const email = ref("");
  const pass = ref("");

  async function login() {
    const response = await axios.post("http://localhost:3031/api/auth/login", {
      email: email.value,
      password: pass.value,
    });
    $router.push({
      name: "films",
    });
  }
</script>

<style scoped></style>
