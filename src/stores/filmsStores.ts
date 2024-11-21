import { defineStore } from "pinia";
import { ref } from "vue";


export const useFilmsStore = defineStore('films', ()=>{
    const films = ref([])
    let id = 0
    function addFilm(){

    }
})