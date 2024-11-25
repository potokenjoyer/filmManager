<template>
  <div class="main-content">
  <div class="content-wrapper">
  <div class="form">
    <img src="/src/images/logo.png" class="logo" />
    <h1 class="logo-text">FWATCH</h1>
    <RouterView></RouterView>
  </div>
</div>
</div>
</template>

<style>
.main-content{
  margin: 0 auto;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.logo-text {
  font-family: "Oswald";
  font-size: 40px;
  color: #409eff;
  padding-bottom: 3%;
}
.logo {
  width: 13%;
  padding-bottom: 0px;
}

.content-wrapper{
  display: flex;
  align-items: center;
}
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
    background: rgb(16, 16, 16);
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
