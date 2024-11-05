<template>
  <div class="wrapper">
    <div class="logo-container">
      <img src="../images/logo.png" class="logo" />
      <h1 class="logo-text">FWATCH</h1>
    </div>
    <div class="link-container">
      <div class="header">
        <ElLink class="link" type="primary"> Фильмы </ElLink>
        <ElLink class="link" type="primary"> Жанры </ElLink>
        <ElLink class="link" type="primary"> Актеры </ElLink>
        <ElLink class="link" type="primary" @click="$router.push({name:'login'})"> Выйти </ElLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding-top: 2%;
  height: 10%;
}

.logo-text {
  font-family: "Oswald";
  font-size: 36px;
  color: #409eff;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%; 
  font-family: Oswald;
}

.link-container {
  width: 30%;
  display: flex;
}
.logo-container {
  width: 15%;
  display: flex;
  align-items: center;
  gap: 10px;

}
.link {
  font-size: 20px;
}

.logo {
  width: 13%;
  padding-bottom: 0px;
}
</style>
