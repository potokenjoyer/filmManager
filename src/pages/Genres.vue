<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <div class="logo-container">
        <a href="">
      <img src="../images/logo_text.png" class="logo" />
    </a>

      </div>
      <div class="link-container">
        <div class="header">
          <ElLink
            class="link"
            type="primary"
            @click="$router.push({name:'films'})"
            :class="{ 'active-link': isActiveRoute('/films') }"
          >
            ФИЛЬМЫ
          </ElLink>
          <ElLink
            class="link"
            type="primary"
            :class="{ 'active-link': isActiveRoute('/genres') }"
          >
            ЖАНРЫ
          </ElLink>
          <ElLink class="link" type="primary"
          @click="$router.push({name:'actors'})"
          > АКТЕРЫ </ElLink>
          <ElLink
            class="link"
            type="primary"
            @click="$router.push({ name: 'login' })"
          >
            ВЫЙТИ
          </ElLink>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  const $route = useRoute();
  console.log($route.path);
  
  const isActiveRoute = (path) => {
    return $route.path === path;
  };
  </script>
  
  <style lang="scss" scoped>
  .active-link {
    border-bottom: 1px solid #409eff;
  }
  .wrapper{
  margin: 0 auto;
  font-weight: normal;
  display: flex; 
  justify-content: center;
  width: 100%;
}
.wrapper-header {
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
    font-size: 22px;
  }
  
  .logo {
  width: 70%;
  padding-bottom: 0px;
}
  </style>
  