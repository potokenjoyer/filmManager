<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <div class="logo-container">
        <a href="">
          <img src="./images/logo_text.png" class="logo" />
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

  <div class="content-wrapper">
    <el-button type="primary" plain @click="showModalWindowForm">
      Добавить фильм
    </el-button>
  </div>

  <div>
    <ModalWindowForm v-if="visible" />
  </div>
</template>

<script setup>
import { useFilmsStore } from "../../stores/filmsStores";
import { ref } from "vue";
import ModalWindowForm from "./components/ModalWindowForm.vue";

const filmsStores = useFilmsStore();
//visible для модального окна
const visible = ref(false)
function showModalWindowForm() {
 visible.value = true
  console.log(visible);
}

// роутер
const $route = useRoute();

//чисто на тест смотреть роутинг (потом удали)
console.log($route.path);

const isActiveRoute = (path) => {
  return $route.path === path;
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 5%;
}
.add-btn {
  display: flex;
  vertical-align: middle;
  padding-top: 5%;
}

.btn-add-film {
  width: 300px;
  height: 400px;
  background-color: #0d0d0d;
  border: 1px solid #409eff;
  font-size: 100px;
  color: #242424;
}
.wrapper {
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
// .main-content{
//   display: flex;
//   align-items: center;
// }

.add_film {
  display: flex;
}

.active-link {
  border-bottom: 1px solid #409eff;
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
