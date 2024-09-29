<template>
  <p
    v-if="isSuccessful"
    class="recovery"
    style="font-size: 22px; padding-bottom: 20px">
    Вам присвоен новый пароль : {{ newPassword }}
  </p>
  <template v-else>
    <p
      class="recovery"
      style="font-size: 22px; padding-bottom: 20px">
      Для восстановления доступа введите e-mail
    </p>
    <ElInput
      v-model="email"
      class="input-login"
      style="width: 300px"
      placeholder="Введите email" />
  </template>
  <div class="links-container">
    <div>
      <ElButton
        class="btn-enter"
        type="primary"
        :icon="ArrowLeft"
        @click="$router.push({ name: 'login' })">
        Вернуться
      </ElButton>
      <ElButton
        v-if="!isSuccessful"
        class="btn-enter"
        type="primary"
        @click="submit">
        Отправить
      </ElButton>
    </div>
  </div>
</template>

<script setup>
  import { ArrowLeft } from "@element-plus/icons-vue";
  import axios from "axios";

  const email = ref("");

  const newPassword = ref("");

  const isSuccessful = ref(false);

  async function submit() {
    const response = await axios.post(
      "http://localhost:3031/api/auth/reset-password",
      {
        email: email.value,
      }
    );
    console.log(response);
    newPassword.value = response.data.result.password;
    isSuccessful.value = true;
  }
</script>

<style scoped></style>
