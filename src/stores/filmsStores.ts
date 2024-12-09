import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilmsStore = defineStore("films", () => {
  let id = 0;
  const films = ref([]);

  function addFilm(newFilm, genreFilm, actors) {
    if (newFilm && genreFilm != "") {
      films.value.push({
        id: id++,
        filmName: newFilm,
        genre: genreFilm,
        actors: actors,
      });
    }
    console.log(newFilm);
    console.log(genreFilm);
    console.log(actors);
  }
  return {
    addFilm,
  };
});
