import { defineComponent, ref } from "vue";
import {getFilms} from '../services/film'
import request from '../utils/request'
import type { Film } from "@/models";
export default defineComponent({
    async created() {
        this.films = await getFilms()
    },
    setup(props, ctx) {
        const films = ref([] as Film[])
        return {
            films
        }
    },
    
})