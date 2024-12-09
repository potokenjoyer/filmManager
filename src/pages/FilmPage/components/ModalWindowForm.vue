<template>
  <div class="model">
    <div class="modal_main">
      <div class="close_btn">
        <el-button type="danger" @click="closeModalWindowForm">X</el-button>
      </div>
      <h1 class="modal_title">Заполните форму</h1>
      <ElInput
        v-model="newFilm"
        placeholder="Введите название фильма"
        @keydown.enter="filmsStores.addFilm(newFilm, genreFilm, actors)"
      />
      <h1>Название фильмы: {{ newFilm }}</h1>
      <ElInput
        v-model="genreFilm"
        placeholder="Введите жанр фильма"
        @keydown.enter="filmsStores.addFilm(newFilm, genreFilm, actors)"
      />
      <h1>Жанры фильма: {{ genreFilm }}</h1>
      <ElInput
        v-model="actors"
        placeholder="Актеры"
        @keydown.enter="filmsStores.addFilm(newFilm, genreFilm, actors)"
      />
      <h1>Актеры фильма: {{ actors }}</h1>
      <div class="add-btn">
        <el-button
          type="primary"
          @click="filmsStores.addFilm(newFilm, genreFilm, actors)"
        >
          СОХРАНИТЬ
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

//store
const filmsStores = useFilmsStore();

function closeModalWindowForm() {
  visible.value = !visible.value;
  console.log(visible.value);
}

//для инпутов
const newFilm = ref("");
const genreFilm = ref("");
const actors = ref("");
</script>

<style>
.close_btn {
  margin-top: 0%;
  margin-left: 93%;
}
/* overlay */
.modal {
  width: 100%;
  position: fixed;
  inset: 0;
  background-color: rgb(0, 0, 0);
  display: flex;
}
.modal_main {
  position: relative;
  max-width: 600px;
  background-color: rgb(16, 16, 16);
  margin: auto;
  border: 1px solid #409eff;
  border-radius: 16px;
  padding: 30px;
  color: #409eff;
}
</style>
