<template>
  <div class="login-page">
    <!-- Показывать если forgotPass==true -->
    <div class="form" >
      <h1 class="logo">fWatch</h1>
      <form class="login-form" :click="checkValue">
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
          <!-- при клике форгот пасс меняет на false (отображается 2 форма ) -->
          <el-link type="primary"
            >Забыли пароль?</el-link
          >
        </div>
        <div><el-link type="primary">Зарегистрироваться</el-link></div>
      </div>
    </div>
    <!-- вторая форма (забыл логин) -->

    <!-- Третья форма, письмо отправлено -->
    <!-- <div class="form" v-if="(sendRecoveryMessage == false)">
      <h1 class="logo">fWatch</h1>
      <p class="recovery">
        Письмо с восстановлением доступа отправлено на указанный e-mail
      </p>
      <form class="login-form" :click="checkValue"></form>
      <div class="links-container">
        <div>
          <el-link type="primary" @click="forgotPass = !forgotPass"
            >Вернуться</el-link
          >
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref
  
 } from 'vue';
const currentTab = ref('')

const Tab = {

}


</script>

<style>
.recovery {
  color: #409eff;
  padding-bottom: 10px;
}
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
