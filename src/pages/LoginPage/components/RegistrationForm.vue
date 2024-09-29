<template>
  <p
    v-if="isSuccessful"
    class="recovery"
    style="font-size: 22px; padding-bottom: 20px">
    Вы успешно зарегистрированы
  </p>
  <template v-else>
    <h2 style="color: #409eff; padding-bottom: 15px">
      Заполните форму для регистрации
    </h2>
    <ElInput
      v-model="userName"
      class="input-login"
      placeholder="Как вас зовут?" />

    <ElInput
      v-model="firstName"
      class="input-login"
      placeholder="Первое имя" />
    <ElInput
      v-model="email"
      class="input-login"
      placeholder="Введите вашу почту" />

    <ElInput
      v-model="password"
      class="input-login"
      placeholder="Придумайте пароль" />
    <div style="padding-bottom: 20px; padding-top: 10px">
      <ElButton
        class="btn-enter"
        type="primary"
        @click="registration">
        Зарегистрироваться
      </ElButton>
    </div>
  </template>

  <div style="padding-bottom: 20px">
    <ElButton
      class="btn-enter"
      type="primary"
      :icon="ArrowLeft"
      @click="$router.push({ name: 'login' })">
      Вернуться
    </ElButton>
  </div>
</template>

<script setup>
  import axios from "axios";
  import { ArrowLeft } from "@element-plus/icons-vue";

  const $router = useRouter();

  const email = ref("");
  const password = ref("");
  const userName = ref("");
  const firstName = ref("");

  const isSuccessful = ref(false);

  async function registration() {
    const response = await axios.post(
      "http://localhost:3031/api/auth/register",
      {
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        username: userName.value,
      }
    );
    console.log(response);
    isSuccessful.value = true;
  }
</script>

<style scoped></style>
