import FilmPage from "../pages/FilmPage.vue";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useFilmsStore = defineStore('', ()=>{
    const films = ref([])
    let id = 0
    function addFilm(){

    }
})