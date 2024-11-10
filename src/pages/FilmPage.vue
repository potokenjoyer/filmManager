<template>
  <div class="wrapper">
    <div class="logo-container">
      <a href="">
      <img src="../images/logo_text.png" class="logo"  />
    </a>

    </div>
    <div class="link-container">
      <div class="header">
        <ElLink
          class="link"
          type="primary"
          :class="{ 'active-link': isActiveRoute('/films') }"
        >
          ФИЛЬМЫ
        </ElLink>
        <ElLink
          class="link"
          type="primary"
          @click="$router.push({ name: 'genres' })"
          :class="{ 'active-link': isActiveRoute('/genres') }"
        >
          ЖАНРЫ
        </ElLink>
        <ElLink
          class="link"
          type="primary"
          @click="$router.push({ name: 'actors' })"
          :class="{ 'active-link': isActiveRoute('/actors') }"
        >
          АКТЕРЫ
        </ElLink>

        <div class="logo-container" @mouseover="showMenu" @mouseleave="hideMenu">
      <!-- Картинка логотипа -->
      <img src="/src/images/avatar.png" class="logo" >
  
      <!-- Выпадающее меню -->
      <div class="dropdown-menu" v-show="isMenuVisible">
        <ElLink
          type="primary"
          @click="$router.push({ name: 'login' })"
        >
          ВЫЙТИ
        </ElLink>

      </div>
    </div>

      </div>
    </div>
  </div>

</template>

<script setup>
import {useFilmsStore} from '../stores/filmsStores'
import { ref } from 'vue';

      // Определяем переменную для состояния видимости меню
      const isMenuVisible = ref(false);
  
      // Методы для управления состоянием меню
      const showMenu = () => {
        isMenuVisible.value = true;
      };
  
      const hideMenu = () => {
        isMenuVisible.value = false;
        return {
        isMenuVisible,
        showMenu,
        hideMenu
      };
      };
  
      // Возвращаем переменные и методы для использования в шаблоне
      
    


const $route = useRoute();
console.log($route.path);

const isActiveRoute = (path) => {
  return $route.path === path;
};
</script>

<style lang="scss" scoped>
 /* Основные стили для логотипа */
 .logo-container {
    position: relative;
    display: inline-block;
  }
  
  .logo {
    // width: 50%;
    // height: auto;
    cursor: pointer;
  }
  
  /* Стили для выпадающего меню */
  .dropdown-menu {
    position: absolute;
    top: 100%; /* Положение меню относительно логотипа */
    left: 0;
    background-color: #0d0d0d;
    min-width: 150px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  /* Элементы внутри выпадающего меню */
  .dropdown-menu a {
    color: #409eff;
    border: 1px solid #409eff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  /* Стиль при наведении на элементы меню */
  .dropdown-menu a:hover {
    background-color: #ddd;
  }
.add_film{
  display: flex;
}

.active-link {
  border-bottom: 1px solid #409eff;
}

.wrapper {
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding-top: 2%;
  height:10%;
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
