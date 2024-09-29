<template>
  <div class="form">
    <h1 class="logo">fWatch</h1>
    <RouterView></RouterView>
  </div>
</template>

<style>
  .recovery {
    color: #409eff;
    padding-bottom: 10px;
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

  .input-login {
    padding-bottom: 12px;
    width: 300px;
  }
  .input-password {
    padding-bottom: 20px;
    width: 300px;
  }
  .form {
    position: relative;
    background: #ffffff;
    padding: 45px;
    padding-bottom: 10px;
    text-align: center;
    border-radius: 10px;
    width: 550px;
  }
  .logo {
    font-size: 42px;
    font-weight: bold;
    font-family: Roboto;
    color: #409eff;
    padding-bottom: 10px;
  }
</style>
